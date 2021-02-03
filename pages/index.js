import Head from "next/head";
import Layout from "../src/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        Hello World...
      </div>
    </Layout>
  );
}
