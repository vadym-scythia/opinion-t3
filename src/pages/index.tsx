import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession  } from "next-auth/react"
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data: session, status } = useSession();

  return (
    <div>
      <Head>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>
          {status !== "authenticated" && 
          <button onClick={() => {void signIn("instagram"); }}>
            <div>Sign in</div>
          </button>}
          {status === "authenticated" && 
          <button onClick={() => {void signOut(); }}>
            <div>Sign out</div>
          </button>}
        </div>
      </main>
    </div>
  );
};

export default Home;
