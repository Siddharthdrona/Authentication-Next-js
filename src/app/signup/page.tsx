"use client";
import Link from "next/link";
import React,{useEffect} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

import Image from "next/image";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "", 
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login")
    } catch (error:any) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-3">
  //     <div>
  //       <h1>{loading ? "Processing" : "Signup"}</h1>
  //       <hr className="border w-13" />
  //     </div>
  //     <div className="gap-3">
  //       <label htmlFor="username">username</label>
  //       <div>
  //         <input
  //           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus"
  //           id="username"
  //           type="text"
  //           value={user.username}
  //           onChange={(e) => setUser({ ...user, username: e.target.value })}
  //           placeholder="username"
  //         />
  //       </div>
  //     </div>

  //     <div className="gap-3">
  //       <label htmlFor="email">email</label>
  //       <div>
  //         <input
  //           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus"
  //           id="email"
  //           type="text"
  //           value={user.email}
  //           onChange={(e) => setUser({ ...user, email: e.target.value })}
  //           placeholder="email"
  //         />
  //       </div>
  //     </div>

  //     <div className="gap-3">
  //       <label htmlFor="password">password</label>
  //       <div>
  //         <input
  //           className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus"
  //           id="password"
  //           type="password"
  //           value={user.password}
  //           onChange={(e) => setUser({ ...user, password: e.target.value })}
  //           placeholder="password"
  //         />
  //       </div>
  //     </div>

  //     <button
  //     onClick={onSignup}
  //     className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
  //     >{buttonDisabled ? "No signup" : "Signup"}</button>
  //     <Link href="/login">Visit login page</Link>

  //   </div>
  // );



















// return (
//   <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

//     <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">
//           {loading ? "Processing..." : "Create Account"}
//         </h1>

//         <p className="text-gray-500 mt-2">
//           Signup to get started
//         </p>
//       </div>


//       <div className="mb-5">
//         <label
//           htmlFor="username"
//           className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Username
//         </label>

//         <input
//           className="w-full p-3 text-gray-800 bg-white caret-blue-600
//           border border-gray-300 rounded-xl
//           focus:outline-none focus:ring-2 focus:ring-blue-500
//           transition"
//           id="username"
//           type="text"
//           value={user.username}
//           onChange={(e) =>
//             setUser({ ...user, username: e.target.value })
//           }
//           placeholder="Enter username"
//         />
//       </div>


//       <div className="mb-5">
//         <label
//           htmlFor="email"
//           className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Email
//         </label>

//         <input
//           className="w-full p-3 text-gray-800 bg-white caret-blue-600
//           border border-gray-300 rounded-xl
//           focus:outline-none focus:ring-2 focus:ring-blue-500
//           transition"
//           id="email"
//           type="text"
//           value={user.email}
//           onChange={(e) =>
//             setUser({ ...user, email: e.target.value })
//           }
//           placeholder="Enter email"
//         />
//       </div>


//       <div className="mb-6">
//         <label
//           htmlFor="password"
//           className="block text-sm font-medium text-gray-700 mb-2"
//         >
//           Password
//         </label>

//         <input
//           className="w-full p-3 text-gray-800 bg-white caret-blue-600
//           border border-gray-300 rounded-xl
//           focus:outline-none focus:ring-2 focus:ring-blue-500
//           transition"
//           id="password"
//           type="password"
//           value={user.password}
//           onChange={(e) =>
//             setUser({ ...user, password: e.target.value })
//           }
//           placeholder="Enter password"
//         />
//       </div>


//       <button
//         onClick={onSignup}
//         disabled={buttonDisabled}
//         className={`w-full py-3 rounded-xl font-semibold text-white
//         transition duration-300
//         ${
//           buttonDisabled
//             ? "bg-gray-400 cursor-not-allowed"
//             : "bg-blue-600 hover:bg-blue-700 shadow-md"
//         }`}
//       >
//         {buttonDisabled ? "Fill Details" : "Signup"}
//       </button>


//       <div className="text-center mt-6">
//         <p className="text-gray-500 text-sm">
//           Already have an account?
//         </p>

//         <Link
//           href="/login"
//           className="text-blue-600 font-medium hover:underline"
//         >
//           Login here
//         </Link>
//       </div>

//     </div>

//   </div>
// );
























































return (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-blue-900 to-black px-4">

    {/* background glow */}
    <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>


    <div className="relative w-full max-w-md 
    bg-white/10 backdrop-blur-xl 
    border border-white/20
    rounded-3xl shadow-2xl p-8">


      {/* Logo / Brand */}
      <div className="text-center mb-8">

        <div className="mx-auto mb-4 w-14 h-14 
        rounded-2xl bg-blue-600 
        flex items-center justify-center
        text-white text-2xl font-bold shadow-lg">

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
          {loading ? "Creating..." : "Create account"}
        </h1>


        <p className="text-gray-300 mt-2">
          Start your journey with us
        </p>

      </div>



      {/* Username */}
      <div className="mb-4">

        <label className="text-sm text-gray-200">
          Username
        </label>

        <input
          className="
          mt-2 w-full p-3
          bg-white/10
          text-white
          placeholder-gray-400
          border border-white/20
          rounded-xl
          outline-none
          focus:ring-2 focus:ring-blue-500
          transition"
          id="username"
          type="text"
          value={user.username}
          onChange={(e)=>
            setUser({...user,username:e.target.value})
          }
          placeholder="Enter your name"
        />

      </div>



      {/* Email */}
      <div className="mb-4">

        <label className="text-sm text-gray-200">
          Email
        </label>


        <input
          className="
          mt-2 w-full p-3
          bg-white/10
          text-white
          placeholder-gray-400
          border border-white/20
          rounded-xl
          outline-none
          focus:ring-2 focus:ring-blue-500
          transition"
          id="email"
          type="email"
          value={user.email}
          onChange={(e)=>
            setUser({...user,email:e.target.value})
          }
          placeholder="you@example.com"
        />

      </div>




      {/* Password */}
      <div className="mb-6">

        <label className="text-sm text-gray-200">
          Password
        </label>


        <input
          className="
          mt-2 w-full p-3
          bg-white/10
          text-white
          placeholder-gray-400
          border border-white/20
          rounded-xl
          outline-none
          focus:ring-2 focus:ring-blue-500
          transition"
          id="password"
          type="password"
          value={user.password}
          onChange={(e)=>
            setUser({...user,password:e.target.value})
          }
          placeholder="••••••••"
        />

      </div>




      {/* Button */}

      <button

      onClick={onSignup}

      disabled={buttonDisabled}

      className={`
      w-full py-3 rounded-xl
      font-semibold text-white
      transition

      ${
        buttonDisabled
        ?
        "bg-gray-500 cursor-not-allowed"
        :
        "bg-blue-600 hover:bg-blue-700 shadow-lg"
      }
      `}

      >

      {buttonDisabled ? "Fill details" : "Create account"}

      </button>

      <p className="text-center text-gray-300 mt-6">

        Already have an account?

        <Link
        href="/login"
        className="text-blue-400 ml-2 hover:underline"
        >
          Login
        </Link>

      </p>


    </div>


  </div>
);







}
 