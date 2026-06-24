"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen py-2">
  //     <h1 className="text-4xl">Verify Email</h1>
  //     <h2 className="p-2 bg-orange-500 rounded mt-2">{token ? `${token}` : "no token"}</h2>

  //     {verified && (
  //       <div>
  //         <h2 className="text-2xl">Email Verified</h2>
  //         <Link href="/login">Login</Link>
  //       </div>
  //     )}

  //     {error && (
  //       <div>
  //         <h2 className="text-2xl bg-red-500">Error</h2>
  //       </div>
  //     )}
  //   </div>
  // );





  






  return (
  <div className=" min-h-screen flex items-center justify-center bg-linear-to-br  from-slate-900  via-blue-900  to-black px-4
  ">

    {/* Glow */}

    <div className=" absolute w-96 h-96  bg-green-500/20 rounded-full blur-3xl ">
    
    </div>

    <div className="
    relative
    w-full
    max-w-md
    bg-white/10
    backdrop-blur-xl
    border
    border-white/20
    rounded-3xl
    shadow-2xl
    p-8
    text-center
    ">



      {/* Icon */}

      <div
      className="
      mx-auto
      mb-5
      w-20
      h-20
      rounded-full
      bg-green-600
      flex
      items-center
      justify-center
      text-white
      text-4xl
      shadow-lg
      "
      >

        ✓

      </div>





      <h1 className="
      text-3xl
      font-bold
      text-white
      mb-3
      ">
        Verify Email
      </h1>



      <p className="
      text-gray-300
      mb-6
      ">
        Confirming your email address
      </p>






      {/* Token */}

      <div className="
      bg-white/10
      rounded-xl
      p-4
      mb-6
      ">


        <p className="
        text-gray-400
        text-sm
        mb-2
        ">
          Verification Token
        </p>



        <p className="
        bg-orange-600
        text-white
        rounded-lg
        p-2
        break-all
        text-sm
        ">

          {token ? token : "No token"}

        </p>


      </div>







      {/* Success */}

      {verified && (

        <div className="
        bg-green-500/20
        border
        border-green-500/30
        rounded-xl
        p-5
        ">


          <h2 className="
          text-2xl
          font-semibold
          text-green-400
          ">

            Email Verified 🎉

          </h2>



          <p className="
          text-gray-300
          mt-2
          mb-4
          ">
            Your account is ready
          </p>




          <Link

          href="/login"

          className="
          inline-block
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-2
          rounded-xl
          transition
          "

          >

            Go to Login

          </Link>


        </div>

      )}








      {/* Error */}

      {error && (

        <div className="
        bg-red-500/20
        border
        border-red-500/30
        rounded-xl
        p-5
        ">


          <h2 className="
          text-2xl
          font-semibold
          text-red-400
          ">

            Verification Failed ❌

          </h2>



          <p className="
          text-gray-300
          mt-2
          ">
            Invalid or expired token
          </p>


        </div>

      )}



    </div>


  </div>
);




  



}
