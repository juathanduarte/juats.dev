import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type TTheme = "light" | "dark";

interface IThemeContextValue {
  theme: TTheme;
  toggleTheme: () => void;
  setTheme: (next: TTheme) => void;
}

const ThemeContext = createContext<IThemeContextValue | undefined>(undefined);

const THEME_STORAGE_KEY = "theme";

type TThemeState = { state: { theme: TTheme } };

const readStoredTheme = (): TTheme | undefined => {
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw) as TThemeState;
    const value = parsed?.state?.theme;
    return value === "light" || value === "dark" ? value : undefined;
  } catch {
    return undefined;
  }
};

const writeStoredTheme = (theme: TTheme) => {
  try {
    localStorage.setItem(
      THEME_STORAGE_KEY,
      JSON.stringify({ state: { theme } })
    );
  } catch {}
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const prefersDark = (() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  })();

  const initialTheme = readStoredTheme() ?? (prefersDark ? "dark" : "light");
  const [theme, setThemeState] = useState<TTheme>(initialTheme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    writeStoredTheme(theme);
  }, [theme]);

  const setTheme = useCallback((next: TTheme) => setThemeState(next), []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo<IThemeContextValue>(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): IThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};
