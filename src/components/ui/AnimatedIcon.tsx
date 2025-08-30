import basketballIcon from "@assets/svgs/basketball.svg";
import hotBeverageIcon from "@assets/svgs/hot-beverage.svg";
import laptopIcon from "@assets/svgs/laptop.svg";
import mateIcon from "@assets/svgs/mate.svg";
import soccerBallIcon from "@assets/svgs/soccer-ball.svg";
import videoGameIcon from "@assets/svgs/video-game.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedIcon = () => {
  const [currentIcon, setCurrentIcon] = useState<number>(0);
  const icons = [
    mateIcon,
    hotBeverageIcon,
    laptopIcon,
    videoGameIcon,
    basketballIcon,
    soccerBallIcon,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <div className="relative w-6 h-6 lg:w-8 lg:h-8">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIcon}
          src={icons[currentIcon]}
          alt={`Icon ${currentIcon + 1}`}
          className="w-full h-full hover:opacity-100 transition-opacity duration-200"
          initial={{
            opacity: 0,
            y: 10,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -10,
            scale: 0.9,
          }}
          transition={{
            duration: 0.5,
            ease: [0.68, -0.55, 0.27, 1.55],
          }}
        />
      </AnimatePresence>
    </div>
  );
};

export default AnimatedIcon;
