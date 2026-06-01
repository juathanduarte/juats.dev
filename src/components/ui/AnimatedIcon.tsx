import { useEffect, useState } from "react";

type TEmojiItem = { emojiUrl: string; label: string; key: string };
const ICONS: TEmojiItem[] = [
  { 
    emojiUrl: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/1f9c9.png", 
    label: "mate",
    key: "mate"
  },
  { 
    emojiUrl: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/2615.png", 
    label: "hot beverage",
    key: "coffee"
  },
  { 
    emojiUrl: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@14.0.0/img/apple/64/1f4bb.png", 
    label: "laptop",
    key: "laptop"
  },
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
    <div className="relative w-5 h-5 lg:w-6 lg:h-6 overflow-hidden flex items-center justify-center">
      {ICONS.map((item, index) => {
        const isActive = index === currentIcon;

        return (
          <span
            key={item.key}
            className={`absolute transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,0.61,0.36,1)] will-change-transform select-none ${
              isActive
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-3 scale-95"
            }`}
            aria-hidden={!isActive}
          >
            <img
              src={item.emojiUrl}
              alt={item.label}
              className="w-5 h-5 lg:w-6 lg:h-6 object-contain select-none"
              draggable="false"
            />
          </span>
        );
      })}
    </div>
  );
};

export default AnimatedIcon;
