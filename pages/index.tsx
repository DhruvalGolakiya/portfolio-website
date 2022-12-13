import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ContentBody from "../components/content";
import CustomCursor from "../components/cursor";
import Header from "../components/header";
import AboutPage from "./about";

export default function Home() {
  return (
    <div className="">
      <ContentBody />
    </div>
  );
}
