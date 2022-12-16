import React from "react";
import { Services } from "../../database/services/services";

export default function ServiceCard({ image, name, description }: any) {
  return (
    <div className="flex-col">
      <div className="justify-center h-auto  items-center pt-[10px] leading-[20px] px-[20px] rounded-[10px] relative">
        <>
          <div className="flex justify-center items-center mx-auto ">
            <img
              height={"50px"}
              width={"50px"}
              src={image}
              alt="Speed image"
              className="svg_image pb-[10px]"
            />
          </div>
          <div className="flex justify-center text-[white] text-[20px] py-[10px]">
            <div>{name}</div>
          </div>
          <div className="flex justify-center  text-center  text-[white] text-[15px] w-[250px]">
            <p>{description}</p>
          </div>
        </>
      </div>
    </div>
  );
}
