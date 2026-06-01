import { useEffect, useState } from "react";

interface IInitialLoadingProps {
  onComplete: () => void;
}

const InitialLoading = ({ onComplete }: IInitialLoadingProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const word = "juats.dev";

  useEffect(() => {
    const typeSpeed = 80;
    const pauseTime = 800;

    const timer = setTimeout(() => {
      if (currentLetterIndex < word.length) {
        setDisplayedText(word.substring(0, currentLetterIndex + 1));
        setCurrentLetterIndex(currentLetterIndex + 1);
      } else if (currentLetterIndex === word.length) {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 400); // Wait for fade out animation
        }, pauseTime);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentLetterIndex, onComplete]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 450);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#fcfcfc] dark:bg-[#0a0a0a] flex items-center justify-center transition-opacity duration-400 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white font-sans">
            {displayedText}
            <span
              className={`text-primary-600 dark:text-primary-500 font-light ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100`}
            >
              _
            </span>
          </h1>
        </div>

        <div className="w-48">
          <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary-600 dark:bg-primary-500 transition-all duration-100 ease-out"
              style={{ width: `${(currentLetterIndex / word.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialLoading;
