import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <div className="flex  justify-between ml-[100px]  items-center mr-[150px] font-header  h-[100px]">
        <div className="text-logo_color ">
          <a href="/">
            <h1 className="text-[20px] font-header">
              Dhruval <span className="text-[#d1d0d0]">Golakiya</span>
            </h1>
          </a>
        </div>
        <div>
          <div className="mr-[350px] flex text-logo_color">
            <ul className="flex gap-[30px]  justify-center">
              <motion.a href="/">
                <li className="hover:text-[30px]">Home</li>
              </motion.a>
              <a href="/about">
                <li className="hover:text-[30px]">About</li>
              </a>
              <a>
                <li className="hover:text-[30px]">Work</li>
              </a>
              <a>
                <li className="hover:text-[30px]">Expertise</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="">
          <div>
            <ul>
              <a>
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
