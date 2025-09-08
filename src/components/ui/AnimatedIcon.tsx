import { useEffect, useState } from "react";

type TEmojiItem = { emoji: string; label: string };
const ICONS: TEmojiItem[] = [
  { emoji: "🧉", label: "mate" },
  { emoji: "☕", label: "hot beverage" },
  { emoji: "💻", label: "laptop" },
];

const AnimatedIcon = () => {
  const [currentIcon, setCurrentIcon] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % ICONS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-6 h-6 lg:w-8 lg:h-8 overflow-hidden flex items-center justify-center">
      {ICONS.map((item, index) => {
        const isActive = index === currentIcon;

        return (
          <span
            key={item.emoji}
            role="img"
            aria-label={item.label}
            className={`absolute transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,0.61,0.36,1)] will-change-transform select-none ${
              isActive
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-3"
            }`}
            aria-hidden={!isActive}
          >
            <span className="text-[1.25rem] leading-none lg:text-[1.5rem]">
              {item.emoji}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default AnimatedIcon;
