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
    <div
      id="home"
      className="flex justify-between  mt-[100px] mr-[50px] font-name w-[100vw]"
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
                "<a>Hello, World. <br />  I'm <span style='color:#85C1E9'> Dhruval Golakiya. </span> <br /> Full Stack Developer.</a>"
              )
              .pauseFor(200)
              .start();
          }}
        />
      </div>
    </div>
  );
}
