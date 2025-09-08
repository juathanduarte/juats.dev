import hotBeverageIcon from "@assets/svgs/hot-beverage.svg";
import laptopIcon from "@assets/svgs/laptop.svg";
import mateIcon from "@assets/svgs/mate.svg";
import { useEffect, useState } from "react";

const ICONS = [mateIcon, hotBeverageIcon, laptopIcon];

const AnimatedIcon = () => {
  const [currentIcon, setCurrentIcon] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % ICONS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-6 h-6 lg:w-8 lg:h-8 overflow-hidden">
      {ICONS.map((icon, index) => {
        const isActive = index === currentIcon;

        return (
          <img
            key={icon}
            src={icon}
            alt={`Icon ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,0.61,0.36,1)] will-change-transform ${
              isActive
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-3"
            }`}
            aria-hidden={!isActive}
          />
        );
      })}
    </div>
  );
};

export default AnimatedIcon;
