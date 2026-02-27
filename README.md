# Polyglot Hub - Language Learning Assistant

Welcome to the **Polyglot Hub** project! This is an Enterprise-level Language Learning platform designed to help users learn English and Japanese through interactive quizzes, theory lessons, vocabulary flashcards, and realtime progress tracking.

---

## 🏗 System Architecture (Modular Monolith)

The project follows a **Feature-Sliced Design / Modular Monolith** approach on the frontend (React). The directory structure strictly separates global context, features, and reusable components:

```text
src/
 βö£βöÇβöÇ app/               # Global setup (Providers, Router, Global Error Boundary)
 βö£βöÇβöÇ features/          # Core Business Modules (English, Japanese, Auth)
 βö£βöÇβöÇ pages/             # Route components that compose layouts
 βö£βöÇβöÇ shared/            # Shared code across features
 βöé   βö£βöÇβöÇ api/           # API config (Axios Interceptors, services)
 βöé   βö£βöÇβöÇ components/    # Reusable UI (Buttons, Modals, ProtectedRoute)
 βöé   βööβöÇβöÇ utils/         # Generic utilities (TimeTracking, Storage)
 βööβöÇβöÇ assets/            # Static files, images
```

## 🚀 Prerequisites

Ensure you have the following installed on your local machine:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher) or yarn

## 🛠 Setup & Installation

Follow these steps to get your development environment running:

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Language
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file at the root of the project:
   ```env
   VITE_API_URL=https://language-backend-onoo.onrender.com
   # Add your Firebase credentials if required for local testing
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:5173`.

## 📦 Build & Deploy

To build the application for production:
```bash
npm run build
```
The output will be generated inside the `dist/` directory, ready to be deployed to platforms like Vercel, Netlify, or any static hosting service.

## 🔒 Enterprise Features Included
- **Global Error Handling**: Unhandled exceptions are caught by an `ErrorBoundary` to prevent blank screens.
- **API Interceptors**: All outgoing requests are processed through `axiosClient.js`, enabling centralized header injection and global error toasts.
- **Protected Routes**: Secure views (like Dashboard and Settings) are guarded by `ProtectedRoute.jsx` verifying Firebase Auth state.

## 📄 Documentation Links
For deeper dives into the project's architecture and capabilities, please refer to:
- [System Design](./docs/SYSTEM_DESIGN.md)
- [API Documentation](./docs/API_DOCS.md)
- [Testing Strategy](./docs/TESTING_STRATEGY.md)
