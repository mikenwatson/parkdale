/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C5A572',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        deco: ['Poiret One', 'cursive'],
      },
    },
  },
  plugins: [],
};