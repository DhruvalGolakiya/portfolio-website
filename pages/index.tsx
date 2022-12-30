import { AnimatePresence, motion } from "framer-motion";
import Header from "../components/header";
import HomePage from "./home-page";

export default function Home() {
  return (
    <div className="font-name">
      <Header />
      <HomePage />
    </div>
  );
}
