"use client";
import Image from "next/image";
import { cilArrowRight } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { PopupButton, PopupModal, PopupWidget } from "react-calendly";
import { useEffect, useState } from "react";

export default function Home() {
  const [rootElement, setRootElement] = useState<any>(null);
  const [open, setOpen] = useState<any>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("root"));
    }
  }, []);
  return (
    <main id="root" className="relative">
      <div className="w-full h-[100vh] relative">
        <img
          src="/desktop-wallpaper-tech-white-tec.jpeg"
          className=" object-cover w-full h-full"
        />
        <div className="bg-[rgb(0,0,0,0.25)] h-full w-full absolute top-0"></div>
      </div>
      <div className="h-[400px] w-full absolute left-0 top-0 bottom-0 right-0 self-center flex items-center justify-center">
        <div className="bg-[white] h-full w-[900px] grid grid-cols-10 gap-x-4">
          <div className="col-span-4">
            <img src="/dhruval2.jpg" className="object-cover h-[400px]" />
          </div>
          <div className="col-span-6 py-6 px-4 ojuju">
            <h1 className="text-[44px] anta-regular">Hello,Dhruval Here</h1>
            <h3 className="mt-2  ojuju tracking-tight leading-[22px]">
              I’m automation specialist who can help you create efficient and
              innovative solutions for your business needs. Whether you want to
              build a website, a web app, or an automation workflow.
            </h3>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className=" items-center gap-x-3  text-[16px] py-2 px-4 rounded-[12px] mt-10"
            >
              Let's talk!
            </button>

            <div className="relative">
              <PopupModal
                open={open}
                onModalClose={() => {
                  setOpen(false);
                }}
                url="https://calendly.com/dhruval-jga/45min?month=2024-03&background_color=373622&text_color=dad8cc&primary_color=373622"
                rootElement={rootElement}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 items-center grid grid-cols-10 gap-x-4 col-span-10  text-white ojuju pt-8 px-10 w-full  z-[99999]">
        <a
          href="/"
          className="underline col-span-2 pl-12 basis-1/2 text-[22px]"
        >
          Dhruval Golakiya
        </a>
        <div className="col-start-9 col-span-3">
          <ul className="flex gap-x-16 text-[18px]">
            <a href="/" className="relative">
              <li>Work</li>
            </a>
            <a href="/" className="relative">
              <li>About</li>
            </a>
            <a href="/" className="relative">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        {/*       <ul className="text-[white]">
          <li>
            Home
          </li>
        </ul> */}
      </div>
    </main>
  );
}
