import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefcf9',
          100: '#fdf8f0',
          200: '#faf0d8',
          300: '#f5e4b8',
          400: '#eed390',
          500: '#e4c06a',
          600: '#d8a94a',
          700: '#c08f3a',
          800: '#9b7232',
          900: '#7d5e2f',
        },
        secondary: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        beige: {
          50: '#fefcf9',
          100: '#fdf8f0',
          200: '#faf0d8',
          300: '#f5e4b8',
          400: '#eed390',
          500: '#e4c06a',
          600: '#d8a94a',
          700: '#c08f3a',
          800: '#9b7232',
          900: '#7d5e2f',
        },
        warm: {
          50: '#fefcf9',
          100: '#fdf8f0',
          200: '#faf0d8',
          300: '#f5e4b8',
          400: '#eed390',
          500: '#e4c06a',
          600: '#d8a94a',
          700: '#c08f3a',
          800: '#9b7232',
          900: '#7d5e2f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
