import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Header from "../components/header";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Header />
      <AnimatePresence initial={false} mode={"wait"}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
