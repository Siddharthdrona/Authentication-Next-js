"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const resetPassword = async () => {
    setMessage("");
    setError("");

    if (!password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!token) {
      setError("Invalid or missing token");
      return;
    }

    try {
      const response = await axios.post("/api/users/resetpassword", {
        token,
        password,
      });

      setMessage(response.data.message);

      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-5">Reset Password</h1>

        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded mb-4 border"
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 rounded mb-4 border"
        />

        <button
          onClick={resetPassword}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl w-full"
        >
          Change Password
        </button>

        {message && <p className="text-green-400 mt-4">{message}</p>}

        {error && <p className="text-red-400 mt-4">{error}</p>}
      </div>
    </div>
  );
}
