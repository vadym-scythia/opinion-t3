import { type NextPage } from "next";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react"

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const isNotAuth = status !== "authenticated";
  const isAuth = status === "authenticated";

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-slate-500">
        {
          isNotAuth &&
          <button onClick={() => { void signIn("instagram"); }}>
            <div>Sign in</div>
          </button>
        }
        {
          isAuth && (
            <>
              <button onClick={() => { void signOut(); }}>
                Sign out
              </button>
              <Link href="/user-profile">
                My profile
              </Link>
              <div>WIP: here will be search wizard</div>
            </>)
        }
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        {
          isNotAuth &&
          <div className="text-white">To search and leave your opinion, please sign in with your Instagram account.</div>
        }
        {
          isAuth &&
          <div>WIP: Here will be paletts with search results</div>
        }
      </main>
    </div>
  );
};

export default Home;
