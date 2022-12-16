import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import { AppProps } from "next/app";
import useLocation from "react";
import { Divider } from "@mui/material";

export default function Header() {
  return (
    <div className="flex fixed justify-between  items-center  font-header w-[100vw] px-[100px] h-[100px]">
      <div className="text-logo_color ">
        <a href="/">
          <h1 className="text-[20px] font-header relative">
            Dhruval
            <span className="text-[#d1d0d0] absolute ">Golakiya</span>
          </h1>
        </a>
      </div>
      <div>
        <div className="mr-[00px] flex text-logo_color">
          <ul className="flex gap-[30px]  justify-center">
            <a
              href="#home"
              // className={path == "/" ? "text-[#85C1E9] text-[30px]" : ""}
            >
              <li className={`hover:text-[30px]`}>Home</li>
            </a>
            <a
              href={"#about"}
              // className={path == "/about" ? "text-[#85C1E9] text-[30px]" : ""}
            >
              <li className="hover:text-[30px]">About</li>
            </a>
            <a
              href={"#work"}
              // className={path == "/work" ? "text-[#85C1E9] text-[30px]" : ""}
            >
              <li className="hover:text-[30px]">Work</li>
            </a>
            <a
              href={"#expertise"}
              // className={
              //   path == "/expertise" ? "text-[#85C1E9] text-[30px]" : ""
              // }
            >
              <li className="hover:text-[30px]">Expertise</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="text-[white]">
        <div>
          <ul>
            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}
