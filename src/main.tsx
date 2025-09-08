import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import "./locales/i18n";

(() => {
  try {
    let theme: "light" | "dark" | undefined;
    const stored = localStorage.getItem("theme");
    if (stored) {
      const parsed = JSON.parse(stored);
      theme = parsed?.state?.theme as "light" | "dark" | undefined;
    } else {
      // Migrate from legacy key
      const legacy = localStorage.getItem("theme-storage");
      if (legacy) {
        const parsedLegacy = JSON.parse(legacy);
        theme = parsedLegacy?.state?.theme as "light" | "dark" | undefined;
        if (theme) {
          localStorage.setItem("theme", JSON.stringify({ state: { theme } }));
          localStorage.removeItem("theme-storage");
        }
      }
    }
    if (theme === "light" || theme === "dark") {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(theme);
      return;
    }
  } catch {}
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const fallbackTheme = prefersDark ? "dark" : "light";
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(fallbackTheme);
})();

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
