import React from "react";
import AboutPage from "../pages/about";
import ExpertisePage from "../pages/expertise";
import WorkPage from "../pages/work";
import ContentBody from "./content";
import Header from "./header";
import Socials from "./socials";
import { Divider } from "@mui/material";

export default function Body() {
  return (
    <>
      <div className="flex body-class">
        <div className="pt-[100px]">
          <Divider sx={{ bgcolor: "#525252" }} />
          <ContentBody />
        </div>
        <div className="pt-[100px]">
          <Divider sx={{ bgcolor: "#525252" }} />
          <AboutPage />
        </div>
        <div className="pt-[100px]">
          <Divider sx={{ bgcolor: "#525252" }} />
          <WorkPage />
        </div>
        <div className="pt-[100px]">
          <Divider sx={{ bgcolor: "#525252" }} />
          <ExpertisePage />
        </div>
      </div>
    </>
  );
}
