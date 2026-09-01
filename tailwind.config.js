/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A4670',
        secondary: '#4D8C40',
        tertiary: '#76B947',
        'neutral-bg': '#F8F9FA',
      },
      fontFamily: {
        heading: ['"Hanken Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

