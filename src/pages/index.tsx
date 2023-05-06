import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react"
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  const isNotAuth = status !== "authenticated";
  const isAuth = status === "authenticated";

  return (
    <div>
      <Head>
        <div className="flex flex-col items-center justify-center bg-slate-500">
          {
            isNotAuth &&
            <button onClick={() => { void signIn("instagram"); }}>
              <div>Sign in</div>
            </button>
          }
          {
            isAuth &&
            <button onClick={() => { void signOut(); }}>
              <div>Sign out</div>
            </button> &&
            <Link href="/user-profile">
              <a>My profile</a>
            </Link> &&
            <div>WIP: here will be search wizard</div>
          }
        </div>
      </Head>
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
