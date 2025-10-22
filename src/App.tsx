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
      {isLoading && (
        <InitialLoading onComplete={handleLoadingComplete} />
      )}

      {showContent && (
        <div className="min-h-screen animate-slide-up">
          <Header />
          <main className="flex flex-col">
            <Hero />
            <About />
            <Technologies />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
