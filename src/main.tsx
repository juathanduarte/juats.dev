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

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
