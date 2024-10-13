"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";
import Link from "next/link";

const HeroComponent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-48 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div variants={slideInFromTop} className="px-[7px]">
          <Image
            src="/spheronxaptos.webp"
            width={500}
            height={500}
            alt="banner-logo"
            className="w-[60%] h-full"
          />
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex flex-col gap-6 mt-3 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="text-transparent text-[7rem] font-extrabold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Spheron SuperMove Tour
          </span>
        </motion.div>
        <Link href="https://sphn.notion.site/Spheron-SuperMove-Tour-a0a840cc31e3437b81394281005d6f7b" target="_blank">
          <motion.p
            variants={slideInFromLeft(1)}
            className="py-2 text-center text-white cursor-pointer rounded-3xl max-w-[200px] text-xl border border-secondary"
          >
            Learn More!
          </motion.p>
        </Link>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/background.png"
          alt="image for hero"
          height={350}
          width={350}
          className="opacity-50 rounded-3xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroComponent;
