import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn } from "next-auth/react"
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <button onClick={() => {void signIn("instagram"); }}>
          <div>Sign in</div>
        </button>
      </main>
    </>
  );
};

export default Home;
