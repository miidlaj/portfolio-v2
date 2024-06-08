import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Muhammed Midlaj | Java Full Stack Developer</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="Muhammed Midlaj | Java Full Stack Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Muhammed Midlaj | Java Full Stack Developer"
        />
        <meta
          name="description"
          content="Hi, I'm Midlaj. I'm a Full Stack Developer. I've spent the last 3 years building and scaling applications for some pretty cool companies and individuals. I also create interesting self projects on my spare time. Let's connect!"
        />

        <meta
          property="og:title"
          content="Muhammed Midlaj | Java Full Stack Developer"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://midlaj.vercel.app/" />
        <meta
          property="og:image"
          content="https://deverajc.com/screenshot.png"
        />
        <meta
          property="og:description"
          content="Hi, I'm Midlaj. I'm a Full Stack Developer. I've spent the last 3 years building and scaling applications for some pretty cool companies and individuals. I also create interesting self projects on my spare time. Let's connect!"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@midl_aj" />
        <meta
          name="twitter:title"
          content="Muhammed Midlaj | Java Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Hi, I'm Midlaj. I'm a Full Stack Developer. I've spent the last 3 years building and scaling applications for some pretty cool companies and individuals. I also create interesting self projects on my spare time. Let's connect!"
        />
        <meta name="twitter:creator" content="@midl_aj" />
        <meta
          name="twitter:image"
          content="https://deverajc.com/screenshot.png"
        />

      </Head>
      <Home />
    </>
  );
}
