# System Design & Data Flow

This document details the architectural choices, data flow, and database schema context for the Polyglot Hub Language project.

## 1. Architectural Pattern: Feature-Sliced Design
The core pattern driving this frontend revolves around independent features instead of layer-first architecture. 

### Data Flow (Unidirectional)
1. **View (UI Layer)**: The user clicks the "Start Quiz" button inside `ExercisePage.jsx`.
2. **Hook (Business Logic)**: The component delegates the action to a custom Hook (`useHiraganaGame.js`).
3. **Service Layer (Data Access)**: The Hook executes an API fetching function inside `geminiService.js`.
4. **Client Layer (Network)**: The service layer delegates to the centralized `axiosClient.js`, which intercepts the request to append Headers/Auth-tokens.
5. **Global State / Persistence**: Upon success, data updates the local component state and potentially invokes global utilities (`points.js`, `taskProgress.js`) to cache progress in Firebase Firestore.

## 2. Global Exception Handling Flow
- In case of network errors (500, 404) or bad logic, the `axiosClient` **Response Interceptor** acts as the first line of defense, displaying a global error toast (`antd message`).
- If an unhandled exception bubbles up to the UI Thread causing React to crash, the `<ErrorBoundary>` root component intercepts it and provides a user-friendly recovery UI fallback.

## 3. Database Schema (Firebase Firestore)
Though Firebase is a NoSQL schema-less document-store, the underlying application enforces the following logical structures:

### `users` Collection
Tracks user identity and cross-platform syncing.
- `uid` (string) - Firebase Auth ID
- `email` (string)
- `roles` (array<string>) - (e.g., `["ADMIN", "USER"]`)

### `tasks` Collection
Keeps track of generated grammatical assignments or daily vocabulary missions.
- `taskId` (string) - Unique ID for the quiz instance
- `type` (string) - Type of test (`wordForm`, `hiragana`, `suffixes`)
- `questions` (array<object>) - The structured question datasets fetched from AI Backends

### `progress` Collection
Aggregated metric data storing streak metrics, completed exercises, and badges.
- `userId` (string)
- `totalXP` (integer)
- `dailySeconds` (integer) - Stored via `timeTracking.js`
- `lastActiveDate` (timestamp)
