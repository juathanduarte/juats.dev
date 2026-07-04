import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { lazy, Suspense, useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import InitialLoading from "./components/ui/InitialLoading";
import { useSEO } from "./hooks/useSEO";
import Hero from "./sections/Hero";

const Experience = lazy(() => import("./sections/Experience"));
const Technologies = lazy(() => import("./sections/Technologies"));
const Projects = lazy(() => import("./sections/Projects"));
const Volunteer = lazy(() => import("./sections/Volunteer"));
const Contact = lazy(() => import("./sections/Contact"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showBelowFold, setShowBelowFold] = useState(false);

  useSEO({
    keywords:
      "juathan, juathan coelho duarte, juats, juathan duarte, desenvolvedor full-stack, react, typescript, nodejs, frontend, backend, javascript, portfólio, ufpel, ciência da computação, software engineer, pelotas, desenvolvedor web",
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowBelowFold(true);
  };

  return (
    <>
      <div className="min-h-screen bg-[#fcfcfc] dark:bg-[#0a0a0a]">
        {isLoading && <InitialLoading onComplete={handleLoadingComplete} />}

        <Header />
        <main className="flex flex-col">
          <Hero />
          {showBelowFold && (
            <Suspense fallback={null}>
              <Experience />
              <Technologies />
              <Projects />
              <Volunteer />
              <Contact />
            </Suspense>
          )}
        </main>
        {showBelowFold && <Footer />}
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
