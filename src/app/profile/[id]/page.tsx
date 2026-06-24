export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;


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

        <h1
          className=" text-3xl font-bold  text-white mb-3 "
        >
          Profile
        </h1>

        <p
          className="  text-gray-300 mb-6 "
        >
          Dynamic user profile page
        </p>

        <div
          className="  bg-white/10 rounded-xl p-5 border  border-white/10">
          <p
            className="  text-gray-400 text-sm mb-2 ">
            User ID
          </p>

          <div
            className=" inline-block  bg-orange-600  text-white px-5 py-2 rounded-xl font-semibold break-all "
          >
            {id}
          </div>
        </div>
      </div>
    </div>
  );
}
