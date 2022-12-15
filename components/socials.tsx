import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Socials() {
  return (
    <div className="fixed  bottom-20 mt-[100px] right-[40px]">
      <ul className="flex-col grid gap-[40px]">
        <a className="vl relative left-[8px] top-5"></a>
        <a href="#" className="">
          <FaInstagram className="text-[white] h-auto w-[20px] hover:w-[30px] absolute hover:text-[red] " />
        </a>

        <a href="#about">
          <FaFacebook className="text-[white] h-auto w-[20px] hover:w-[30px] absolute hover:text-[#3b5998]" />
        </a>
        <a href="#">
          <FaTwitter className=" text-[white] h-auto w-[20px] hover:w-[30px] absolute hover:text-[#00acee]" />
        </a>
        <a href="#">
          <FaLinkedinIn className="text-[white] h-auto w-[20px] hover:w-[30px] absolute hover:text-[#0A66C2] " />
        </a>
      </ul>
    </div>
  );
}
