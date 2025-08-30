import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      toggleTheme: () => {
        const currentTheme = get().theme;
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        set({ theme: newTheme });

        // Aplicar classe ao documento
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
      },
      setTheme: (theme: Theme) => {
        set({ theme });

        // Aplicar classe ao documento
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
      },
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Aplicar tema ao reidratar
          document.documentElement.classList.remove('light', 'dark');
          document.documentElement.classList.add(state.theme);
        }
      },
    }
  )
);
