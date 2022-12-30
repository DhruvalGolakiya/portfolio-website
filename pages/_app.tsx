import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Header from "../components/header";
import Socials from "../components/socials";
import { Html } from "next/document";
import Head from "next/head";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Gilda+Display&display=swap"
          rel="stylesheet"
        />
      </Head>
      

      <Component key={router.pathname} {...pageProps} />
    </div>
  );
}

export default MyApp;
