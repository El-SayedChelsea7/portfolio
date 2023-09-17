import Link from "next/link";
import React, { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import HeroImg from "assets/images/hero.png";
import { BtnPrimary } from "./ui/Btns";
const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="hero snap-start" id="home">
      <div className="container relative min-h-screen flex gap-4 items-center justify-center flex-wrap sm:flex-nowrap">
        <div>
          <h1 className="text-6xl mb-5 mt-[100px]" data-aos="fade-right">
            <span className="text-main">Hi</span>, My Name Is El-Sayed Chelsea
          </h1>
          <p className="text-2xl" data-aos="fade-right">
            I'm A BackEnd .NET Developer from Egypt in Mansoura, with one year
            experience
          </p>
          <div className="link flex mt-5 gap-5">
            <BtnPrimary
              text="Github"
              href="https://github.com/El-SayedChelsea7"
            />
            <BtnPrimary
              text="Facebook"
              href="https://www.facebook.com/sayed.chelsea.7"
            />
          </div>
        </div>
        <div className="overflow-hidden animate-hero" data-aos="fade-right">
          <Image src={HeroImg} alt="Hero Img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
