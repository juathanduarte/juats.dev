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
    const typeSpeed = 100;
    const pauseTime = 1000;

    const timer = setTimeout(() => {
      if (currentLetterIndex < word.length) {
        setDisplayedText(word.substring(0, currentLetterIndex + 1));
        setCurrentLetterIndex(currentLetterIndex + 1);
      } else if (currentLetterIndex === word.length) {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 500); // Wait for fade out animation
        }, pauseTime);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentLetterIndex, onComplete]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent dark:from-primary-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-200/20 via-transparent to-transparent dark:from-primary-800/20" />

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 dark:bg-primary-800/30 rounded-full blur-xl animate-scale-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-300/30 dark:bg-primary-700/30 rounded-full blur-xl animate-scale-pulse-2" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-400/30 dark:bg-primary-600/30 rounded-full blur-xl animate-scale-pulse-3" />

      <div className="relative z-10 flex flex-col items-center space-y-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white animate-slide-up">
            {displayedText}
            <span
              className={`text-primary-500 dark:text-primary-400 ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100`}
            >
              |
            </span>
          </h1>
        </div>

        <div
          className="w-64 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${(currentLetterIndex / word.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialLoading;
