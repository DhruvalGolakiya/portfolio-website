import React from "react";
import Typewriter from "typewriter-effect";

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function ContentBody() {
  return (
    <>
      <div className="flex justify-between mt-[100px] mr-[50px]">
        <div className="relative left-[300px] type-effect">
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
                  "<a>Hello, World. <br /> I'm Dhruval Golakiya <br /> Full Stack Developer <br /> Freelancer</a>"
                )
                .pauseFor(200)
                .start();
            }}
          />
        </div>
        <div>
          <div className="mt-[100px] ">
            <ul className="flex-col grid gap-[40px]">
              <a href="#" className="">
                <FaInstagram className="h-auto w-[20px] hover:w-[30px] absolute hover:text-[red] " />
              </a>

              <a href="#">
                <FaFacebook className="h-auto w-[20px] hover:w-[30px] absolute hover:text-[#3b5998]" />
              </a>
              <a href="#">
                <FaTwitter className="h-auto w-[20px] hover:w-[30px] absolute hover:text-[#00acee]" />
              </a>
              <a href="#">
                <FaLinkedinIn className="h-auto w-[20px] hover:w-[30px] absolute hover:text-[#0A66C2] " />
              </a>
              <a className="vl relative left-[10px]"></a>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
