import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@constants': '/src/constants',
      '@contexts': '/src/contexts',
      '@hooks': '/src/hooks',
      '@locales': '/src/locales',
      '@sections': '/src/sections',
      '@stores': '/src/stores',
      '@types': '/src/types',
      '@utils': '/src/utils',
    },
  },
});
