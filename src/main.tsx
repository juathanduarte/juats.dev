import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './locales/i18n';
import { useThemeStore } from './stores/themeStore';

// Inicializar tema
const { setTheme } = useThemeStore.getState();

// Verificar preferência do sistema
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setTheme('dark');
} else {
  setTheme('light');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
