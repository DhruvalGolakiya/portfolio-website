import React from "react";

export default function Header() {
  return (
    <>
      <div className="flex container justify-between w-[1500px]  mx-[100px]  items-center  h-[100px]">
        <div className="text-logo_color ">
          <a href="/">
            <h1 className="text-[20px] font-name">
              Dhruval <span className="text-[#d1d0d0]">Golakiya</span>
            </h1>
          </a>
        </div>
        <div>
          {/* <div className="text-logo_color">
            <ul>
              <li>Home</li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}
