import React from "react";

export default function HomePage() {
  return (
    <div className="text-[#d4d3d3] grid h-fit justify-center">
      <div className=" flex items-center justify-center mx-auto mt-[46px]">
        <img src="/pfp2.png" className="rounded-full h-[134px] w-[134px] " />
      </div>

      <div className="pt-[12px] text-center items-center justify-center">
        <div>
          <h1 className="text-[20px] tracking-[2px]">
            Hi, i’m <span className="text-[#7d7c7c]">Dhruval</span> ✌🏻
          </h1>
        </div>
        <div className="text-[44px] leading-[60px]">
          <h1>Full Stack Developer</h1>
          <h1>Passionate about Coding</h1>
          <h1>Bring Life To Products</h1>
        </div>
        <div className="pt-[30px] text-[28px]">
          <h1>A full stack web developer and Freelance from india.</h1>
          <h1>specialized in dynamic and responsive web development.</h1>
          <h1 className="text-[#00D1FF]">Let’s make something special.</h1>
        </div>
      </div>
      <div className="absolute -bottom-6 right-0 ">
        <h1 className="text-[rgba(255,255,255,0.05)] text-[240px]">
          {"</ABOUT>"}
        </h1>
      </div>
    </div>
  );
}
