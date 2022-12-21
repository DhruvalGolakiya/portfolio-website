import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import { AppProps } from "next/app";
import useLocation from "react";
import Backdrop from "@mui/material/Backdrop";
import { BackdropRoot, CircularProgress, Divider } from "@mui/material";
import ContactUs from "./contact_us";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className="flex  justify-between  items-center mt-[50px] font-header w-[100vw] px-[100px]">
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
              href="/"
              // className={path == "/" ? "text-[#85C1E9] text-[30px]" : ""}
            >
              <li className={`hover:text-[30px]`}>Home</li>
            </a>
            <a
              href={"/about"}
              // className={path == "/about" ? "text-[#85C1E9] text-[30px]" : ""}
            >
              <li className="hover:text-[30px]">About</li>
            </a>
            <a
              href={"/work"}
              // className={path == "/work" ? "text-[#85C1E9] text-[30px]" : ""}
            >
              <li className="hover:text-[30px]">Work</li>
            </a>
            <a
              href={"/expertise"}
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
            <a href="#contact" onClick={handleToggle}>
              <li>Contact</li>
            </a>
            <Backdrop
              sx={{
                backgroundColor: "rgb(27, 26, 26,0.9)",
                color: "white",
                zIndex: (theme) => theme.zIndex.drawer + 10,
              }}
              open={open}
              onClick={handleClose}
            >
              <ContactUs />
            </Backdrop>
          </ul>
        </div>
      </div>
    </div>
  );
}
