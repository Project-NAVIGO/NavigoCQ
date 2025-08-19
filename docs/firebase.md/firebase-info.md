This file sets up and initializes Firebase for the Navigo app, enabling use of Firebase services such as Authentication, Firestore, and Analytics.

## 📦 What the Code Does

- **Import Firebase SDK modules:**
  - `initializeApp` – Initializes the Firebase application with provided config.
  - `getAnalytics` – Enables Firebase Analytics to track user engagement.
  - `getAuth` – Provides access to Firebase Authentication services (login, registration).
  - `getFirestore` – Provides access to Firestore database services (for storing user data like points and inventory).

- **Firebase Configuration:**
  - Contains the app’s unique Firebase credentials (`apiKey`, `projectId`, `appId`, etc.).
  - This configuration is specific to the Navigo project created on the Firebase Console.

- **Initialize Firebase App:**
  - `initializeApp(firebaseConfig)` bootstraps Firebase with the app’s credentials.

- **Export Firebase services:**
  - `analytics` – For tracking user behavior.
  - `auth` – Used for login/signup with email, password, and Google sign-in.
  - `db` – Used to read/write user data from Firestore.
  - `app` – Default export for general access to the Firebase app instance.

---

**Note:**  
Never expose your Firebase credentials in public repositories. Use environment variables for sensitive data in production.