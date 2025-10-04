import { useEffect, useState } from "react";

interface ITypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

const TypingAnimation = ({
  text,
  speed = 100,
  delay = 0,
  className = "",
}: ITypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(
        () => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        },
        currentIndex === 0 ? delay : speed
      );

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed, delay]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <span className="animate-pulse text-primary-600 dark:text-primary-400">
          |
        </span>
      )}
    </span>
  );
};

export default TypingAnimation;
