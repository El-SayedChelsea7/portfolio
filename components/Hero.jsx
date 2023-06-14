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
      <div className="container relative min-h-screen flex items-center justify-center flex-wrap sm:flex-nowrap">
        <div>
          <h1 className="text-6xl mb-5 mt-[100px]" data-aos="fade-right">
            <span className="text-main">Hi</span>, My Name Is El-Sayed Chelsea
          </h1>
          <p className="text-2xl" data-aos="fade-right">
            I'm Flutter Developer & Back-end Developer from Egypt in Mansoura,
            with two year experience
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
        <div
          className="rounded-full overflow-hidden animate-hero"
          data-aos="fade-right"
        >
          <Image src={HeroImg} alt="Hero Img" />
        </div>
        {/* <Link
          href="#skills"
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <span className="w-5 p-4 rounded-[20px] h-12 border-2 border-solid border-black dark:border-white"></span>
          <span className="dot border-[3px] border-solid border-black rounded-full dark:border-white absolute left-1/2 transition-all duration-300 -translate-x-1/2"></span>
        </Link> */}
      </div>
    </div>
  );
};

export default Hero;
