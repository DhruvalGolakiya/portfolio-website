import React from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div
      id="about"
      className="flex justify-between  mt-[100px]  font-name text-[70px] text-[white] w-[100vw] "
    >
      <div className=" items-center  justify-center flex w-[100%]  type-effect ">
        <h1>About</h1>
      </div>
    </div>
  );
}
