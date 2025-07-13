import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./App.jsx",
    "./main.jsx",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        '.holographic-card': {
          position: 'relative',
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.dark .holographic-card': {
          background: 'rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        },
        '.holographic-card::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background:
            'linear-gradient(to bottom right, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0) 60%, rgba(255,255,255,0) 100%)',
          transform: 'rotate(30deg)',
          animation: 'shine 3s infinite',
        },
        '@keyframes shine': {
          '0%': { transform: 'rotate(30deg) translate(-30%, -30%)' },
          '100%': { transform: 'rotate(30deg) translate(30%, 30%)' },
        },
      });
    }),
  ],
};
