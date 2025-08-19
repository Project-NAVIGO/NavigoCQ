---
sidebar_position: 1
---

# Testing Strategy

This document explains the **testing approach** for the NAVIGO project, including **unit tests, integration tests, and API tests**.

---

## 1. Unit Testing with Jest

We will be testing:
- React components rendering correctly (frontend)
- State management logic
- Utility functions
- Firebase data manipulation functions

**Running Unit Tests:**

```bash
npm run test
```
## 2. Integration Testing with Cypress

We will use it for integrating the:
- Completing a quest updates user progress in Firestore
- Collecting a badge reflects in the user inventory
- Navigation between pages and components
- Leaderboard score updates after a quest completion

```bash
npx cypress open
```

## 3. API Testing with Postman

Endpoints tested:
- Quest API
- Collectibles API 
- Leaderboard API (score tracking)
- Location API (user location verification)

We're testing:
- Response status codes (200, 201, 400, 404, etc.)
- Request/response payload structure
- Authentication via Firebase tokens
- Error handling