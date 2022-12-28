import AboutPage from "./about";
import ContentBody from "./content";
import WorkPage from "./work";

export default function Home() {
  return (
    <div className="">
      <ContentBody />
      <AboutPage />
      <WorkPage />
    </div>
  );
}
