# Testing Strategy

This document outlines the testing approach for ensuring the reliability and maintainability of the Polyglot Hub Language software.

## Philosophy

A good testing strategy for a React Modular Monolith should focus on pure business logic (Unit Tests) and critical user journeys (Integration/E2E Tests). We prioritize `@testing-library/react` and `vitest` for fast execution and high confidence.

## 1. Unit Tests (Core Business Modules)

Core business modules dictate how points are calculated, how tracking occurs, and how UI pure functions (hooks) process raw question datasets from the AI endpoints.
These should handle edge cases effortlessly without mounting a full DOM.

### Prioritized Targets:
1. **Utility/Storage Logic**
   - File: `src/shared/utils/storage/timeTracking.js`
   - Scope: Must accurately test `addLearningSeconds(seconds)` ensuring correct logic with daily increments and local storage edge cases.
   - File: `src/shared/utils/storage/points.js`
   - Scope: Verify `addPoints(amount)` logic correctly accumulates XP globally for a given `userId`.

2. **Custom React Hooks**
   - File: `src/features/*/hooks/useHiraganaGame.js` or `useVocabGame.js`.
   - Tool: Use `@testing-library/react-hooks` or native `renderHook` from React 18+.
   - Scope: Verify that checking an answer (`checkAll()`) appropriately updates state metrics when correct or incorrect strings are matched against `userInputs`. Example testing: "Ensure `isCompleted` evaluates to `true` when correct words equal total inputs."

## 2. Integration Tests 

Integration testing mounts the React component tree and asserts user experience outcomes.
Mocking the API is pivotal in this tier to isolate frontend stability from real cloud delays.

### Prioritized Targets:
1. **The Game Components (`ExercisePage.jsx`)**
   - Scope: Ensure that rendering `Exercise` dynamically populates the child inputs based on mocked `generateQuizFill` API payload.
   - Verification: Mock the `axiosClient` responses using `MSW` (Mock Service Worker) to return a fixed word dataset. Verify that clicking the "Submit" `<button>` updates the UI correctly if the mocked answers are typed in.

2. **Global Exception Handling**
   - Scope: Verify `<ErrorBoundary>` and Axios interceptors actually work.
   - Verification: Tell `MSW` to respond with `500 Internal Server error`. Ensure `<ErrorBoundary>` fallback displays or the `antd` global error toast appears in the test output DOM.

## 3. End-to-End Tests (Future Scope)
E2E testing is best addressed via **Cypress** or **Playwright**.
- Goal: Create a full user flow traversing through `/login`, verifying Firebase Auth sets token, clicking the `/english/grammar` route, completing a sample suffix exercise, and validating that the Dashboard reflects the points uniquely earned.
