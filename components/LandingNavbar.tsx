import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[75px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto md:px-[10px]">
        <a
          href="/"
          className="h-auto flex items-center w-[20%]"
        >
          <Image
            src="/spheron.svg"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin w-[60%] md:w-[15%]"
          />

          <span className="font-extrabold text-xl ml-[10px] hidden md:block text-gray-300">
            SuperMove
          </span>
        </a>

        <div className="w-[80%] h-full flex items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] md:mr-[15px] px-[8px] md:px-[20px] py-[5px] md:py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer text-lg">
              About me
            </a>
            <a href="#skills" className="cursor-pointer text-lg">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer text-lg">
              Projects
            </a>
          </div>
        </div>

        {/* <div className="flex flex-row gap-5"></div> */}
      </div>
    </div>
  );
};

export default Navbar;
