// components/Car.tsx
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Car = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    // Get the current scroll position
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // The horizontal position of the car will depend on scrollY value
  const horizontalPosition = scrollY * 0.5; // Adjust the multiplier for the car's speed

  return (
    <motion.div
      style={{
        position: "fixed",
        bottom: "1%", // Adjust the vertical position
        left: horizontalPosition, // Horizontal position controlled by scroll
        zIndex: 10,
      }}
      animate={{
        rotate: [0, 10, 0], // Slight rotation for realistic motion effect
        x: horizontalPosition, // Move car horizontally
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <img
        src="/tata-nexon-side.png" // Add your car image here
        alt="Moving Car"
        style={{ width: "250px", height: "auto" }}
      />
    </motion.div>
  );
};

export default Car;
