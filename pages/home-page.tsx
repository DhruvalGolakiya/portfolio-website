import React from "react";

export default function HomePage() {
  return (
    <div className="text-[#d4d3d3] font-Abril grid justify-center">
      <div className="w-[180px] h-[200px] bg-[grey] rounded-full flex items-center justify-center mx-auto mt-[100px]"></div>
      <div>
        <h1 className="text-[50px] tracking-[5px]">Full Stack Developer</h1>
      </div>
      <div className="relative  w-[350px] bg-[#39e8ff] rounded-full h-[350px]">
        <div className="bg-[#0b0b0b] h-[490px] inset-0 w-[490px] -left-[20px] top-[0px] absolute rounded-full"></div>
       
      </div>
    </div>
  );
}
