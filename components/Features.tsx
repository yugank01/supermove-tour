"use client";
import { stylesWithCssVar } from "@/utils/motion";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Features = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1]);
  const x = useTransform(scrollYProgress, [0.3, 1], ["50%", "0%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6, 0.85, 0.9],
    [1, 1, 0.4, 0.4, 1]
  );

  const text1Opacity = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    [0, 1, 0]
  );
  const text1Y = useTransform(
    scrollYProgress,
    [0.3, 0.4, 0.5],
    ["30px", "0px", "-30px"]
  );

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    [0, 1, 0]
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.7],
    ["30px", "0px", "-30px"]
  );

  const text3Opacity = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    [0, 1, 0]
  );
  const text3Y = useTransform(
    scrollYProgress,
    [0.7, 0.8, 0.9],
    ["30px", "0px", "-30px"]
  );

  return (
    <section
      ref={targetRef}
      className="flex h-[500vh] flex-col items-center justify-start"
    >
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-xl sm:text-[3rem] md:text-2xl leading-[1] text-white w-[80rem] md:[&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div style={{ x, scale }} className="relative h-full">
          <motion.figure style={{ opacity }} className="h-full">
            <img src="/event-map.webp" className="h-full w-auto rounded-3xl" />
          </motion.figure>
          <motion.figure style={{ opacity: text2Opacity }}>
            <img
              src="/event-map.webp"
              className="absolute inset-0 h-full w-auto rounded-3xl"
            />
          </motion.figure>
          <motion.figure style={{ opacity: text3Opacity }}>
            <img
              src="/event-map.webp"
              className="absolute inset-0 h-full w-auto rounded-3xl"
            />
          </motion.figure>
        </motion.div>
        <motion.p
          style={stylesWithCssVar({
            opacity: text1Opacity,
            "--y": text1Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-[27rem] sm:left-[15rem] md:left-0 w-[25rem] sm:w-[30rem] md:w-auto"
        >
          <span className="text-primary font-bold">What?</span>
          <br />
          <span className="text-xl text-">
            Spheron SuperMove Tour is a 6 month long developer adoption campaign
            being lead by Spheron and Aptos. Spheron SuperMove Tour aims at
            uniting the open - source developer community here in India for
            building dapps on Aptos using Move while utilising Spehron Network.
            This campaign will comprise of over 100+ events and will cover 50+
            colleges & 20+ cities.
          </span>
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text2Opacity,
            "--y": text2Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-[27rem] sm:left-[15rem] md:left-0 w-[25rem] sm:w-[30rem] md:w-auto"
        >
          <span className="text-primary font-bold">Why?</span>
          <br />
          <span className="text-xl">
            The Indian web3 developer ecosystem faces several challenges: a
            fragmented and inadequate education system, stagnant growth in
            communication and social channels, and limited reach and awareness
            among the target audience. Additionally, there is untapped potential
            in scaling hackathon projects into marketplace dApps, while current
            hackathons lack exposure to top-tier universities.
          </span>
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text3Opacity,
            "--y": text3Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-[27rem] sm:left-[15rem] md:left-0 w-[25rem] sm:w-[30rem] md:w-auto"
        >
          <span className="text-primary font-bold">Who?</span>
          <br />
          <span className="text-xl">
            The Spheron SuperMove Tour is tailor-made for developers, aspiring
            blockchain builders, and open-source enthusiasts who are eager to
            dive into the world of blockchain and emerging decentralised
            technologies. This initiative is also for the devshops who are
            either willing to build or have been building in the web3 space to
            get their chance of seeking opportunities from Industry leaders,
            investors or find a partner for their upcoming project.
          </span>
        </motion.p>
      </div>
    </section>
  );
};
