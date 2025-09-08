import hotBeverageIcon from "@assets/svgs/hot-beverage.svg";
import laptopIcon from "@assets/svgs/laptop.svg";
import mateIcon from "@assets/svgs/mate.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ICON_SOURCES = [mateIcon, hotBeverageIcon, laptopIcon];

const AnimatedIcon = () => {
  const [currentIcon, setCurrentIcon] = useState<number>(0);

  useEffect(() => {
    ICON_SOURCES.forEach((src) => {
      const img = new Image();
      img.src = src as unknown as string;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % ICON_SOURCES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-6 h-6 lg:w-8 lg:h-8 will-change-transform">
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={currentIcon}
          src={ICON_SOURCES[currentIcon]}
          alt={`Icon ${currentIcon + 1}`}
          className="w-full h-full hover:opacity-100 transition-opacity duration-200 will-change-transform"
          loading="eager"
          decoding="async"
          initial={{
            opacity: 0,
            x: -10,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: 10,
            scale: 0.9,
          }}
          transition={{
            duration: 0.5,
            ease: [0.68, -0.55, 0.27, 1.55],
          }}
          style={{
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default AnimatedIcon;
