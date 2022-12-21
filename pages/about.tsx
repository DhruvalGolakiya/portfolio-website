import React from "react";
import ServiceCard from "../components/services/service";
import { Services } from "../database/services/services";

export default function AboutPage() {
  return (
    <div
      id="about"
      className=" font-name items-center  text-[white] w-[100vw] px-[100px]"
    >
      <div className="justify-center flex gap-10 mt-[50px] z-50">
        {Services.map(({ name, description, image }) => {
          return (
            <ServiceCard name={name} description={description} image={image} />
          );
        })}
      </div>
      <div className="flex  justify-between pt-[100px] ml-[100px] pl-[100px]">
        <div className="flex ">
          <div className=" flex justify-center items-center">
            <img
              src="/profile/dhruval.jpg"
              className="absolute -z-10 top-0"
              width={800}
            />
          </div>
        </div>
        <div className="-z-10 w-[1000px] h-[500px] ml-[100px] flex justify-center items-center">
          <p className=" text-[30px] ">Personal Info</p>
        </div>
      </div>
    </div>
  );
}
