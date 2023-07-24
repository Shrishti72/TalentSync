import HomePage from "./home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
      <title>Home App</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Lora&family=Playfair+Display&display=swap" rel="stylesheet" />
      </Head>
      <HomePage />
    </>
  );
}

