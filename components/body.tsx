import React from "react";
import AboutPage from "../pages/about";
import ExpertisePage from "../pages/expertise";
import WorkPage from "../pages/work";
import ContentBody from "./content";
import Header from "./header";
import Socials from "./socials";

export default function Body() {
  return (
    <>
      <div className="flex body-class">
        <div className="pt-[200px]">
          <ContentBody />
        </div>
        <div className="pt-[200px]">
          <AboutPage />
        </div>
        <div className="pt-[200px]">
          <WorkPage />
        </div>
        <div className="pt-[200px]">
          <ExpertisePage />
        </div>
      </div>
    </>
  );
}
