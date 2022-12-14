import React from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <m.div
      animate={{ x: "0%", opacity: 1 }}
      initial={{ x: "100%", opacity: 0 }}
      transition={{ ease: "easeOut" }}
      exit={{ opacity: 1 }}
      id="about-page"
      className="flex justify-between  mt-[100px] mr-[50px] font-name text-[70px] text-[white]"
    >
      <div className=" items-center  justify-center flex w-[100%]  type-effect ">
        <h1>About</h1>
      </div>
    </m.div>
  );
}
