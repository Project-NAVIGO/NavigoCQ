import React, { useState, useEffect } from "react";
import {useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import { auth, db } from "./firebase";
import {
  GoogleAuthProvider,
  signInWithCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc} from "firebase/firestore";

function SignUpPage() {
    const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(true);

  const toggleForm = () => setIsRegistering(!isRegistering);

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.regEmail.value;
    const password = e.target.regPassword.value;
    const name = e.target.regName.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      await setDoc(doc(db, "users", uid), {
        name : name,
        email: email,
        points: 0,
        inventory: [],
      });
        toast.success("Signed Up Successfully", {
          position: "top-center",
        });
      toggleForm();
    } catch (error) {
        toast.error(error.message, {
          position: "top-center",
        });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.loginEmail.value;
    const password = e.target.loginPassword.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in Successfully", {
          position: "top-center",
        });
        navigate("/HomePage");
    } catch (error) {
        toast.error(error.message, {
          position: "top-center",
        });
    }
  };

  const handleGoogleLogin = async (response) => {
    const credential = GoogleAuthProvider.credential(response.credential);
    try {
      const result = await signInWithCredential(auth, credential);
      const user = result.user;
      await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        points: 0,
        inventory: [],
      });
        toast.success(`Welcome ${user.displayName}`, {
          position: "top-center",
        });
        navigate("/HomePage");
    } catch (error) {
        toast.error("Google sign-in failed" + error.message, {
          position: "top-center",
        });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    const interval = setInterval(() => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: "58284097478-u3nc9o5bkoj5bkj7ls1me897sik55at0.apps.googleusercontent.com",
          callback: handleGoogleLogin,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("googleLoginBtn"),
          { theme: "outline", size: "large", text: "signin_with" }
        );

        window.google.accounts.id.renderButton(
          document.getElementById("googleRegisterBtn"),
          { theme: "outline", size: "large", text: "signup_with" }
        );

        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      <section className="flex-1 flex flex-col justify-center items-center text-center px-6 py-20">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4">
          {isRegistering ? "Sign Up for NAVIGO 🚀" : "Log In to NAVIGO 🚀"}
        </h1>
        <p className="text-lg max-w-xl mb-8">
          {isRegistering
            ? "Join us to explore your campus, unlock quests, and earn rewards!"
            : "Welcome back! Continue your adventure."}
        </p>

        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          {isRegistering ? (
            <form id="registerForm" onSubmit={handleRegister}>
              <input
                type="text"
                id="regName"
                placeholder="Your name"
                className="w-full mb-4 px-4 py-2 border rounded-lg"
                required
              />
              <input
                type="email"
                id="regEmail"
                placeholder="Email"
                className="w-full mb-4 px-4 py-2 border rounded-lg"
                required
              />
              <input
                type="password"
                id="regPassword"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 border rounded-lg"
                required
              />
              <button
                type="submit"
                id="Signupsubmit"
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Sign Up
              </button>
              <div id="googleRegisterBtn" className="mt-4"></div>
            </form>
          ) : (
            <form id="loginForm" onSubmit={handleLogin}>
              <input
                type="email"
                id="loginEmail"
                placeholder="Email"
                className="w-full mb-4 px-4 py-2 border rounded-lg"
                required
              />
              <input
                type="password"
                id="loginPassword"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 border rounded-lg"
                required
              />
              <button
                type="submit"
                id="Loginsubmit"
                className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Log In
              </button>
              <div id="googleLoginBtn" className="mt-4"></div>
            </form>
          )}
        </div>

        <button
          onClick={toggleForm}
          className="mt-6 text-indigo-600 hover:underline"
        >
          {isRegistering ? "Already have an account? Log In" : "New here? Sign Up"}
        </button>
      </section>

      <footer className="py-6 bg-indigo-600 text-white text-center">
        <p>© {new Date()} NAVIGO. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SignUpPage;