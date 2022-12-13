import React from "react";
import Typewriter from "typewriter-effect";
import { motion as m } from "framer-motion";

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function ContentBody() {
  return (
    <>
      <m.div
        animate={{ x: "0%", opacity: 1 }}
        initial={{ x: "100%", opacity: 0 }}
        transition={{ ease: "easeOut" }}
        exit={{ opacity: 1 }}
        className="flex justify-between  mt-[100px] mr-[50px] font-name"
      >
        <div className="relative left-[300px] type-effect leading-[90px]">
          <Typewriter
            options={{
              loop: true,
              cursor: "|",
              delay: 50,
              deleteSpeed: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "<a>Hello, World. <br />  I'm <span style='color:#85C1E9'> Dhruval Golakiya. </span> <br /> Full Stack Developer. <br /> Freelancer.</a>"
                )
                .pauseFor(200)
                .start();
            }}
          />
        </div>
        <div>
          {/* <div className="absolute bottom-20 mt-[100px]  ">
            <ul className="flex-col grid gap-[40px]">
              <a className="vl relative left-[8px] top-5"></a>
              <a href="#" className="">
                <FaInstagram className="h-auto w-[20px] hover:w-[30px] absolute hover:text-[red] " />
              </a>

              <a href="#about">
                <FaFacebook className="h-auto w-[20px] hover:w-[30px] absolute hover:text-[#3b5998]" />
              </a>
              <a href="#">
                <FaTwitter className="h-auto w-[20px] hover:w-[30px] absolute hover:text-[#00acee]" />
              </a>
              <a href="#">
                <FaLinkedinIn className="h-auto w-[20px] hover:w-[30px] absolute hover:text-[#0A66C2] " />
              </a>
            </ul>
          </div> */}
        </div>
      </m.div>
    </>
  );
}
