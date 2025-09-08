import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./locales/i18n";
import { useThemeStore } from "./stores/themeStore";

const { setTheme } = useThemeStore.getState();

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  setTheme("dark");
} else {
  setTheme("light");
}

const setViewportHeightVariable = () => {
  const viewportHeightUnit = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${viewportHeightUnit}px`);
};

setViewportHeightVariable();

let resizeRafId = 0 as number | undefined;
const handleResizeViewport = () => {
  if (resizeRafId) cancelAnimationFrame(resizeRafId);
  resizeRafId = requestAnimationFrame(() => {
    setViewportHeightVariable();
  });
};

window.addEventListener("resize", handleResizeViewport, { passive: true });
window.addEventListener("orientationchange", handleResizeViewport, {
  passive: true,
});

if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", handleResizeViewport, {
    passive: true,
  });
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
