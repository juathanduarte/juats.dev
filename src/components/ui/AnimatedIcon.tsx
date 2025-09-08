import hotBeverageIcon from "@assets/svgs/hot-beverage.svg";
import laptopIcon from "@assets/svgs/laptop.svg";
import mateIcon from "@assets/svgs/mate.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ICONS = [mateIcon, hotBeverageIcon, laptopIcon];

const AnimatedIcon = () => {
  const [currentIcon, setCurrentIcon] = useState<number>(0);

  // Troca automática a cada 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % ICONS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Pré-carregar ícones (evita lag em mobile)
  useEffect(() => {
    ICONS.forEach((icon) => {
      const img = new Image();
      img.src = icon;
    });
  }, []);

  return (
    <div className="relative w-6 h-6 lg:w-8 lg:h-8 overflow-hidden">
      {ICONS.map((icon, index) => {
        const isActive = index === currentIcon;

        return (
          <motion.img
            key={icon}
            src={icon}
            alt={`Icon ${index + 1}`}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0, x: -12 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedIcon;
