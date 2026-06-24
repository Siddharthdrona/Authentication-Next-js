"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const routerr = useRouter();
  const [data, setData] = React.useState("nothing");

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout successfull");
      routerr.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data._id);
  };


  return (
    <div
      className="min-h-screen flex items-center justify-center 
  bg-linear-to-br from-slate-900 via-blue-900 to-black px-4"
    >
      {/* background glow */}
      <div
        className="absolute w-96 h-96 bg-blue-500/30 
    rounded-full blur-3xl"
      ></div>

      <div
        className="relative w-full max-w-md
    bg-white/10 backdrop-blur-xl
    border border-white/20
    rounded-3xl shadow-2xl p-8 text-center"
      >
      <h1 className="text-3xl font-bold text-white">Profile</h1>

        <p className="text-gray-300 mt-2">Manage your account details</p>

        <div
          className=" my-6 h-px  bg-white/20 "
        ></div>

        {/* User data */}

        <div
          className=" bg-white/10 rounded-xl p-4  text-white "
        >
          <p className="text-sm text-gray-300 mb-2">User ID</p>

          {data === "nothing" ? (
            <p className="text-gray-400">Nothing</p>
          ) : (
            <Link
              href={`/profile/${data}`}
              className="  text-yellow-500 font-semibold hover:underline "
            >
              {data}
            </Link>
          )}
        </div>

        {/* Get details button */}

        <button
          onClick={getUserDetails}
          className=" w-full mt-6 py-3 rounded-xl  bg-orange-500  hover:bg-orange-600  text-white font-semibold transition shadow-lg "
        >
          Get User Details
        </button>

        {/* Logout button */}

        <button
          onClick={logout}
          className=" w-full mt-4 py-3 rounded-xl  bg-blue-600  hover:bg-blue-700  text-white font-semibold transition shadow-lg "
        >
          Logout
        </button>
      </div>
    </div>
  );
}
