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
    <div>
      <Header />
      <Socials />
      <Body />
    </div>
  );
}
