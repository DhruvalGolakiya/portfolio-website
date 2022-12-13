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
            <h1 className="text-[20px] font-header">
              Dhruval <span className="text-[#d1d0d0]">Golakiya</span>
            </h1>
          </a>
        </div>
        <div>
          <div className="mr-[350px] flex text-logo_color">
            <ul className="flex gap-[30px]  justify-center">
              <Link href="/">
                <li className="hover:text-[30px]">Home</li>
              </Link>
              <Link
                href="/about"
                className={path == "/about" ? "text-[red]" : ""}
              >
                <li className="hover:text-[30px]">About</li>
              </Link>
              <Link href={"/work"}>
                <li className="hover:text-[30px]">Work</li>
              </Link>
              <Link href={"/expertise"}>
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
