import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import InitialLoading from "./components/ui/InitialLoading";
import { useSEO } from "./hooks/useSEO";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import Volunteer from "./sections/Volunteer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useSEO({
    keywords:
      "juathan, juathan coelho duarte, juats, juathan duarte, desenvolvedor full-stack, react, typescript, nodejs, frontend, backend, javascript, portfólio, ufpel, ciência da computação, software engineer, pelotas, desenvolvedor web",
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <>
    <div className="min-h-screen bg-[#fcfcfc] dark:bg-[#0a0a0a]">
      {isLoading && <InitialLoading onComplete={handleLoadingComplete} />}

      {showContent && (
        <div className="min-h-screen animate-slide-up">
          <Header />
          <main className="flex flex-col">
            <Hero />
            <Experience />
            <Technologies />
            <Projects />
            <Volunteer />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
    <SpeedInsights />
    </>
  );
};

export default App;
