# SignUpPage.js

## Purpose

The `SignUpPage` component provides user registration and authentication for the Navigo application, supporting:

- Email/Password Sign Up
- Email/Password Log In
- Google Account Authentication (OAuth)
- Dynamic switching between Sign Up and Log In forms

## Key Functionalities

### State Management

- **isRegistering** (`Boolean`): Toggles between Sign Up and Log In forms.

### User Registration (`handleRegister`)

- Triggered on Sign Up form submission.
- Uses Firebase Authentication (`createUserWithEmailAndPassword`) to register users.
- Stores additional user data in Firestore (`users` collection):  
  - `name`, `email`, `points = 0`, `inventory = []`
- Displays toast notifications for success/failure.
- Switches to Log In form upon successful registration.

### User Log In (`handleLogin`)

- Triggered on Log In form submission.
- Authenticates using Firebase (`signInWithEmailAndPassword`).
- Displays toast notifications for success/failure.
- Redirects to `/HomePage` upon successful login.

### Google OAuth Log In (`handleGoogleLogin`)

- Initializes Google Identity Services (or Firebase GoogleAuthProvider).
- Renders Google Sign In/Sign Up buttons.
- Authenticates user and stores info in Firestore as in registration.
- Redirects to `/HomePage` upon success.

### Lifecycle Hook (`useEffect`)

- Loads Google Identity script asynchronously.
- Initializes and renders Google Sign-In buttons.

---

**Note:**  
All authentication is handled securely via Firebase Authentication. Error handling is implemented for invalid credentials and duplicate accounts.