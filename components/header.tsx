import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";
import { AppProps } from "next/app";
import useLocation from "react";

export default function Header() {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      <div className="flex  justify-between ml-[100px]  items-center mr-[150px] font-header  h-[100px]">
        <div className="text-logo_color ">
          <a href="/">
            <h1 className="text-[20px] font-header relative">
              Dhruval
              <span className="text-[#d1d0d0] absolute ">Golakiya</span>
            </h1>
          </a>
        </div>
        <div>
          <div className="mr-[200px] flex text-logo_color">
            <ul className="flex gap-[30px]  justify-center">
              <Link
                href="/"
                className={path == "/" ? "text-[#85C1E9] text-[30px]" : ""}
              >
                <li className={`hover:text-[30px]`}>Home</li>
              </Link>
              <a
                href={"#about-page"}
                className={path == "/about" ? "text-[#85C1E9] text-[30px]" : ""}
              >
                <li className="hover:text-[30px]">About</li>
              </a>
              <Link
                href={"/work"}
                className={path == "/work" ? "text-[#85C1E9] text-[30px]" : ""}
              >
                <li className="hover:text-[30px]">Work</li>
              </Link>
              <Link
                href={"/expertise"}
                className={
                  path == "/expertise" ? "text-[#85C1E9] text-[30px]" : ""
                }
              >
                <li className="hover:text-[30px]">Expertise</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="text-[white]">
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
