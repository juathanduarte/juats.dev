import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IInitialLoadingProps {
  onComplete: () => void;
}

const InitialLoading = ({ onComplete }: IInitialLoadingProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const word = "juats.dev";

  useEffect(() => {
    const typeSpeed = 100;
    const pauseTime = 1000;

    const timer = setTimeout(() => {
      if (currentLetterIndex < word.length) {
        setDisplayedText(word.substring(0, currentLetterIndex + 1));
        setCurrentLetterIndex(currentLetterIndex + 1);
      } else if (currentLetterIndex === word.length) {
        setTimeout(onComplete, pauseTime);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentLetterIndex, onComplete]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100/20 via-transparent to-transparent dark:from-primary-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-200/20 via-transparent to-transparent dark:from-primary-800/20" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary-200/30 dark:bg-primary-800/30 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary-300/30 dark:bg-primary-700/30 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-400/30 dark:bg-primary-600/30 rounded-full blur-xl"
      />

      <div className="relative z-10 flex flex-col items-center space-y-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="text-5xl font-bold text-gray-900 dark:text-white"
          >
            {displayedText}
            <motion.span
              animate={{ opacity: showCursor ? 1 : 0 }}
              transition={{ duration: 0.1 }}
              className="text-primary-500 dark:text-primary-400"
            >
              |
            </motion.span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="w-64"
        >
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              animate={{
                width: `${(currentLetterIndex / word.length) * 100}%`,
              }}
              transition={{
                duration: 0.1,
                ease: "easeOut",
              }}
              className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InitialLoading;
