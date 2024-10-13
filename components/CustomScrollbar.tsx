"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const CustomScrollbar = () => {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get current scroll position
      const windowHeight = window.innerHeight; // Get window height
      const documentHeight = document.documentElement.scrollHeight; // Get document height
      const scrollPercent =
        (scrollPosition / (documentHeight - windowHeight)) * 100; // Calculate percentage scrolled
      setScrollPos(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 h-full w-[40px] flex justify-center items-center z-50">
      <div className="relative h-full w-[40px] overflow-hidden">
        {/* Custom Scroll Image */}
        <div
          className="absolute left-0"
          style={{
            top: `${scrollPos}%`, // Move the image vertically based on scroll position
            transform: "translateY(-50%)", // Center image vertically
          }}
        >
          <Image
            src="/top.png" // Replace with your image path
            alt="scroll image"
            width={100}
            height={100}
            className="shadow-2xl -rotate-90 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomScrollbar;
