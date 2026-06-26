"use client";

import axios from "axios";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendResetEmail = async () => {
    setMessage("");
    setError("");

    if (!email) {
      setError("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("/api/users/forgotpassword", {
        email,
      });

      setMessage(response.data.message);
    } catch (err: any) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-5">Forgot Password</h1>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded mb-4 border"
        />

        <button
          onClick={sendResetEmail}
          disabled={loading}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl w-full"
        >
          {loading ? "Sending..." : "Send Reset Password Link"}
        </button>

        {message && <p className="text-green-400 mt-4">{message}</p>}

        {error && <p className="text-red-400 mt-4">{error}</p>}
      </div>
    </div>
  );
}
