import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import InitialLoading from "./components/ui/InitialLoading";
import { useSEO } from "./hooks/useSEO";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useSEO({
    keywords:
      "desenvolvedor full-stack, react, typescript, nodejs, frontend, backend, javascript, juathan duarte, juats, portfólio, ufpel, ciência da computação",
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <AnimatePresence mode="wait">
        {isLoading && (
          <InitialLoading onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen"
          >
            <Header />
            <main className="flex flex-col">
              <Hero />
              <About />
              <Technologies />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
