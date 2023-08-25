import React, { useEffect, useState } from "react";
import Aos from "aos";
import Title from "./ui/Title";
import axios from "axios";
import { SkillsCard } from "./ui/Card";
import Icons from "./Icons";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiJquery,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { BsBootstrapFill, BsGithub } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { DiSass } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
const Skills = ({ skills }) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="skills snap-start overflow-x-hidden" id="skills">
      <div className="container relative min-h-screen pt-[100px]">
        <Title title="Skills" />
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <SkillsCard title="HTML" Icon={Icons.html} />
          <SkillsCard title="CSS" Icon={Icons.css} />
          <SkillsCard title="Javascript" Icon={IoLogoJavascript} />
          <SkillsCard title="JQuery" Icon={SiJquery} />
          <SkillsCard title="Bootstrap" Icon={BsBootstrapFill} />
          <SkillsCard title="Tailwindcss" Icon={SiTailwindcss} />
          <SkillsCard title="Reactjs" Icon={GrReactjs} />
          <SkillsCard title="Nextjs" Icon={TbBrandNextjs} />
          <SkillsCard title="SASS" Icon={DiSass} />
          <SkillsCard title="TypeScript" Icon={SiTypescript} />
          <SkillsCard title="Nodejs" Icon={FaNodeJs} />
          <SkillsCard title="ExpressJs" Icon={SiExpress} />
          <SkillsCard title="MongoDB" Icon={SiMongodb} />
          <SkillsCard title="PHP" Icon={Icons.php} />
          <SkillsCard title="Git & Github" Icon={BsGithub} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const skills = await axios.get(`http://localhost:5000/api/v1/skills`);
  console.log(skills);
  return {
    props: {
      skills,
    },
  };
}

export default Skills;
