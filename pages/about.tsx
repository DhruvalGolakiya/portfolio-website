import React from "react";
import ServiceCard from "../components/services/service";
import { Services } from "../database/services/services";

export default function AboutPage() {
  return (
    <div className="relative font-name items-center  text-[white] w-[100vw] px-[100px] h-[100vh]">
      <section
        id="about"
        style={{ position: "absolute", top: "-10vh" }}
      ></section>
      <div className="justify-center flex gap-10 mt-[50px] -z-[50]">
        {Services.map(({ name, description, image }) => {
          return (
            <ServiceCard name={name} description={description} image={image} />
          );
        })}
      </div>
      <div className="flex justify-between">
        <div className="flex ">
          <img src="/profile/dhruval.jpg" className="absolute -z-[50] top-0 w-[50vw] h-[1000px] object-cover" />
        </div>
        <div className="flex">
          <p className="text-[30px] ">Personal Info</p>
        </div>
      </div>
    </div>
  );
}
