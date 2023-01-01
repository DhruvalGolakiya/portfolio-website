import React from "react";
import { FiMail } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div className=" w-[100vw] h-[10vh] bg-[black] flex items-center justify-between px-[100px]  text-[#d4d3d3]">
      <div className="flex gap-[15px]">
        <div className=" relative border-[2px] border-[#ffffff] rounded-[50%] w-[50px] h-[50px] ">
          <FiMail
            color="white"
            className="w-[20px] h-[20px] m-auto left-0 right-0 top-[50%] -translate-y-[50%] absolute  text-center justify-center flex items-center"
          />
        </div>
        <div className="hidden md:flex items-center">
          <h1>dhruval@golakiya.com</h1>
        </div>
      </div>
      <div className="ml-[70px]">
        <img src="/main-logo.png" height={90} width={90} />
      </div>
      <div>
        <ul className="flex gap-[20px]">
          <div>
            <li>Portfolio</li>
          </div>
          <div>
            <li>Expertise</li>
          </div>
          <div>
            <li>Services</li>
          </div>
          <div>
            <li>Contact</li>
          </div>
        </ul>
      </div>
    </div>
  );
}
