// components/Timeline.tsx
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { timelineData } from "@/data/timelineData";

const timelineVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const Timeline: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setScrollY(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto p-6 relative">
      <h2 className="text-4xl text-center font-bold text-white mb-12">
        Timeline of Events
      </h2>

      {/* Vertical line with animated gradient */}
      <div className="relative">
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-300 to-indigo-500"
          style={{
            backgroundPositionY: scrollY * 0.2,
            backgroundSize: "200% 200%", // Expand gradient to create smooth movement
          }}
        ></motion.div>

        <div className="space-y-12">
          {timelineData.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative flex justify-between items-center w-full ${
                  isLeft ? "left-timeline" : "right-timeline"
                }`}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                variants={timelineVariants}
              >
                {/* Marker Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-4 w-4 bg-blue-500 rounded-full border-4 border-gray-700"></div>

                {/* Event Card */}
                <div
                  className={`w-5/12 p-6 bg-gradient-to-br ${
                    isLeft
                      ? "from-blue-600 to-blue-400 text-left"
                      : "from-indigo-600 to-indigo-400 text-right"
                  } rounded-lg shadow-lg`}
                >
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-36 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-200">
                    {event.description}
                  </p>
                  <span className="block mt-3 text-xs text-gray-400">
                    {event.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
