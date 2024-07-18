/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: '#FDC913',
        lightGray: '#5F5F5F',
        darkGray: '#292929',
        red: '#CE2829',
        beige: '#FAF7F2',
      },
      fontFamily: {
        roboto: ['Roboto Condensed', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        quattrocento: ['Quattrocento', 'serif'],
        satisfy: ['Satisfy', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
