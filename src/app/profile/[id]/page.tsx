// export default function UserProfile({params}: any) {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <h1>Profile</h1>
//       <hr />
//       <p className="text-4xl">Profile page {params.id}</p>

//     </div>
//   )
// }

export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen py-2">
  //     <h1 className="m-4">Profile</h1>
  //     <hr />
  //     <p className="text-4xl">Profile page
  //       <span className="bg-orange-600 text-black p-2 m-2 rounded-lg">{id}</span>
  //       </p>
  //   </div>
  // );

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-blue-900 to-black px-4"
    >
      {/* background glow */}
      <div
        className="absolute w-96 h-96 
      bg-orange-500/20 rounded-full blur-3xl"
      >
      </div>

      <div
        className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl
        shadow-2xl p-8 text-center"
      >
        
        {/* Avatar */}

        {/* <div
          className="
      mx-auto
      mb-5
      w-20
      h-20
      rounded-full
      bg-orange-600
      flex
      items-center
      justify-center
      text-white
      text-3xl
      font-bold
      shadow-lg
      "
        >
          {id.charAt(0).toUpperCase()}
        </div> */}

        <h1
          className="
      text-3xl
      font-bold
      text-white
      mb-3
      "
        >
          Profile
        </h1>

        <p
          className="
      text-gray-300
      mb-6
      "
        >
          Dynamic user profile page
        </p>

        <div
          className="
      bg-white/10
      rounded-xl
      p-5
      border
      border-white/10
      "
        >
          <p
            className="
        text-gray-400
        text-sm
        mb-2
        "
          >
            User ID
          </p>

          <div
            className="
        inline-block
        bg-orange-600
        text-white
        px-5
        py-2
        rounded-xl
        font-semibold
        break-all
        "
          >
            {id}
          </div>
        </div>
      </div>
    </div>
  );
}
