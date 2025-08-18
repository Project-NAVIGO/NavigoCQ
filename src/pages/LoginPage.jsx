import React from "react";

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border rounded"
          />
          <button className="bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
