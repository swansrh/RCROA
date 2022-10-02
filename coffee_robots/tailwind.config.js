/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comfortaaBold: ["comfortaaBold", "cursive"],
        comfortaaLight: ["comfortaaLight", "cursive"],
        comfortaa: ["comfortaa", "cursive"],
      },
      colors: {
        //configure custom colors here for use throughout the document
        transparent: 'transparent',
        current: 'currentColor',
        'coffeeL': '#e8ded1',
        'coffeeCards': '#ddc7a1',
        'coffeeCustom': '#f2f1f0',
        'coffeeBrown': '#a0816c',
        'coffeeCaramel': '#d1b78a',
        'coffeePaper': '#bfaa8c',
        'coffeeStain': '#d1c0a8',
        'coffeeDark': '#381515',
        'white': '#ffffff'
      }
    },
  },
  plugins: [],
}