"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

// Animation variants for smooth scroll-triggered animations
const slideInFromLeft = (delay = 0.5) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      type: "tween",
      duration: 0.8,
      ease: "easeInOut",
    },
  },
});

const slideInFromRight = (delay = 0.5) => ({
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      type: "tween",
      duration: 0.8,
      ease: "easeInOut",
    },
  },
});

const slideInFromTop = (delay = 0.5) => ({
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      type: "tween",
      duration: 0.8,
      ease: "easeInOut",
    },
  },
});

const HeroComponent = () => {
  const controls = useAnimation(); // Controls to start animations
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  // Start animation when in view (scroll down and up)
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls} // Controls animation based on scroll
      className="flex flex-row items-center justify-center px-10 md:px-20 mt-60 md:mt-48 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Image with Animation */}
        <motion.div
          variants={slideInFromTop(0.6)}
          className="px-[7px] py-[12px]"
        >
          <Image
            src="/spheronxaptos.webp"
            width={600}
            height={600}
            alt="banner-logo"
            className="md:w-[60%] h-full"
          />
        </motion.div>

        {/* Title with Animation */}
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex flex-col gap-6 mt-3 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="text-transparent md:text-[6.5rem] text-center md:text-left font-extrabold bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Spheron SuperMove Tour
          </span>
        </motion.div>

        {/* Learn More Button */}
        <Link
          href="https://sphn.notion.site/Spheron-SuperMove-Tour-a0a840cc31e3437b81394281005d6f7b"
          target="_blank"
          className="flex justify-center md:justify-normal"
        >
          <motion.p
            variants={slideInFromLeft(1)}
            className="py-2 px-4 text-center text-white cursor-pointer rounded-3xl max-w-[200px] text-xl border border-secondary"
          >
            Learn More!
          </motion.p>
        </Link>
      </div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center hidden md:flex"
      >
        <Image
          src="/hero.jpeg"
          alt="image for hero"
          height={450}
          width={450}
          className="rounded-3xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroComponent;
