import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollRunner = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showRunner, setShowRunner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;

      setScrollProgress(progress);
      setShowRunner(progress > 0.9); // Change to runner at 60%
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lineWidth = 600;
  const positionX = scrollProgress * lineWidth;

  return (
    <div className="w-full flex flex-col items-center mt-32">
      {/* Line */}
      <div className="relative w-[600px] h-10 border-t-2 border-cyan-400">
        {/* Ball moving */}
        <AnimatePresence>
          {!showRunner && (
            <motion.div
              key="ball"
              className="absolute -top-4 w-4 h-4 bg-white rounded-full shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: positionX }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4 }}
            />

          )}
        </AnimatePresence>

        {/* Running man appears */}
        <AnimatePresence>
          {showRunner && (
            <motion.div
              key="runner"
              className="absolute -top-10 text-3xl"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: positionX,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.0 }}
            >
              🏃‍♂️
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScrollRunner;
