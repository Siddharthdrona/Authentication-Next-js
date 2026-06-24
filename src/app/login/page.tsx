"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login sucess", response.data);
      toast.success("Login sucess");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.response?.data);
      toast.error(error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-blue-900 to-black px-4">
      {/* background glow */}
      <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg ">
            <div className="inline-block bg-blue-200 p-2 rounded-lg">
              <Image
                src="/images/image2.png"
                alt="Logo"
                width={200}
                height={200}
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white">
            {loading ? "Logging in..." : "Welcome back"}
          </h1>

          <p className="text-gray-300 mt-2">Login to continue your account</p>
        </div>

        {/* Email */}

        <div className="mb-5">
          <label htmlFor="email" className="text-sm text-gray-200">
            Email
          </label>

          <input
            className=" mt-2 w-full p-3  bg-white/10  text-white  placeholder-gray-400 border border-white/20  rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition"
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="you@example.com"
          />
        </div>

        {/* Password */}

        <div className="mb-6">
          <label htmlFor="password" className="text-sm text-gray-200">
            Password
          </label>

          <input
            className=" mt-2 w-full p-3  bg-white/10  text-white  placeholder-gray-400 border border-white/20 rounded-xl outline-none focus:ring-2  focus:ring-blue-500 transition "
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="••••••••"
          />
        </div>

        {/* Login button */}

        <button
          disabled={buttonDisabled}
          onClick={onLogin}
          className={` w-full py-3 rounded-xl font-semibold  text-white transition

      ${
        buttonDisabled
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700 shadow-lg"
      }

      `}
        >
          {buttonDisabled ? "Complete details" : "Login"}
        </button>

        {/* Signup link */}

        <p className="text-center text-gray-300 mt-6">
          Don't have an account?
          <Link href="/signup" className=" text-blue-400 ml-2 hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
