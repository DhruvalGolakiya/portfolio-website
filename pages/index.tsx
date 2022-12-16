import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Body from "../components/body";
import ContentBody from "../components/content";
import CustomCursor from "../components/cursor";
import Header from "../components/header";
import Socials from "../components/socials";
import AboutPage from "./about";

export default function Home() {
  return (
    <div className=" bg-[rgba(2, 2, 2)]">
      <Header />
      <Socials />
      <Body />
    </div>
  );
}
