import Aos from "aos";
import React, { useEffect } from "react";
import Title from "./ui/Title";
import { ProjectCard } from "./ui/Card";

const Works = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="works snap-start" id="work">
      <div className="container relative min-h-screen pt-[100px]">
        <Title title="My Project" />
        <div className="projects mt-5 flex flex-col gap-5">
          <ProjectCard
            justify="start"
            name="My Blog"
            desc="A personal website for writing articles in programming"
            github="https://github.com/El-SayedChelsea7"
            demo="https://www.araaciit.gq/"
          />
          <ProjectCard
            justify="start"
            name="translate website"
            desc="Website translation using artificial intelligence"
            github="https://github.com/El-SayedChelsea7"
            demo="https://translate-gamma-kohl.vercel.app/"
          />
          <ProjectCard
            justify="start"
            name="Magia Blog"
            desc="An article site for the Magia team, and I made the backend only"
            github="https://github.com/El-SayedChelsea7"
            demo="https://magia-three.vercel.app/"
          />
          <ProjectCard
            justify="start"
            name="khaled ehab"
            desc="Portfolio for designer"
            github="https://github.com/El-SayedChelsea7"
            demo="https://khaledehab.ml/"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
