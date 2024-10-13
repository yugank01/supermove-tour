import React from "react";
import HeroComponent from "./sub/HomeComponent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-[850px] w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-390px] h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroComponent />
    </div>
  );
};

export default Hero;
