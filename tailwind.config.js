/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF', // Changed from Lavender Blush to White
        secondary: '#CEF679', // Lime Cream
        tertiary: '#E278A8', // Sweet Peony
        textMain: '#111111',
        textMuted: '#8A4A69', // Darkened pink for muted text to match the theme
        accentLime: '#CEF679',
        accentPink: '#E278A8',
        borderSoft: '#E278A840', // Semi-transparent Sweet Peony for borders
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.25, 1, 0.5, 1)',
      }
    }
  },
  plugins: [],
};
