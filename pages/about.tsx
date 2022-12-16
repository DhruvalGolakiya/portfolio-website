import React from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";
import ServiceCard from "../components/services/service";
import { Services } from "../database/services/services";
import { Divider } from "@mui/material";

export default function AboutPage() {
  return (
    <div
      id="about"
      className=" font-name items-center  text-[white] w-[100vw] px-[200px]"
    >
      <div className="justify-center flex gap-10 mt-[50px] z-0">
        {Services.map(({ name, description, image }) => {
          return (
            <ServiceCard name={name} description={description} image={image} />
          );
        })}
      </div>
      <div className="flex justify-around">
        <div className="flex">
          <div className="w-[600px] h-[200px] pt-[200px] flex justify-center items-center">
            <img src="/profile/dhruval.jpg" className="-z-10" />
          </div>
        </div>
        <div className="-z-10 w-[900px] pt-[200px]  ml-[200px] h-[500px] justify-center items-center">
          <p className=" text-[35px]">Hello there , I'm Dhruval Golakiya from India. Full Stack Web-Developer</p>
        </div>
      </div>
    </div>
  );
}
