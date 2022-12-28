import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Header from "../components/header";
import Socials from "../components/socials";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="">
      <AnimatePresence initial={false} mode={"wait"}>
        <Header />
        <Socials />
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
