import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "src/assets/images/4.png" },
  { src: "src/assets/images/3.png" },
  { src: "src/assets/images/2.png" },
  { src: "src/assets/images/1.png" },
];

function Header() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 3 seconds unless paused
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="relative w-full">
      {/* Slide Section */}
      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map(
          (item, index) =>
            current === index && (
              <div key={index} className="relative w-full">
                <img
                  className="w-full h-[500px] object-cover"
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 text-white">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.1 }}
                    className="bg-black px-6 py-2 mt-90 text-white font-semibold hover:bg-black transition"
                  >
                    Shop Now
                  </motion.button>
                </div>
              </div>
            )
        )}
      </div>

      {/* Bottom Navigation Section (Arrows + Dots) */}
      <div className="flex items-center justify-center mt-6 space-x-6">
        {/* Left Arrow */}
        <button
          className="p-3 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                current === index ? "bg-gray-900 scale-125" : "bg-gray-400"
              }`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="p-3 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
