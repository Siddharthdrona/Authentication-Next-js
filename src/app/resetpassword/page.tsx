"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];

    setToken(urlToken || "");
  }, []);

  const resetPassword = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      await axios.post("/api/users/resetpassword", {
        token,
        password,
      });

      setSuccess(true);
    } catch (error: any) {
      setError(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-blue-900 to-black px-4">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl w-full max-w-md text-center">
        <h1 className="text-white text-3xl font-bold mb-6">Reset Password</h1>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 rounded-xl mb-5"
        />

        <button
          onClick={resetPassword}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full"
        >
          Change Password
        </button>

        {success && (
          <div className="mt-5 bg-green-500/20 p-4 rounded-xl">
            <h2 className="text-green-400 text-xl">Password Updated 🎉</h2>

            <Link href="/login" className="text-blue-400">
              Go to Login
            </Link>
          </div>
        )}

        {error && <p className="text-red-400 mt-5">{error}</p>}
      </div>
    </div>
  );
}
