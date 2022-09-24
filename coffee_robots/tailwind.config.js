/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      //configure custom colors here for use throughout the document
      transparent: 'transparent',
      current: 'currentColor',
      'coffee-l': '#e8ded1',
      'coffee-custom': '#f2f1f0',
      'coffee-brown': '#a0816c',
      'coffee-caramel': '#c8ad7e',
      'coffee-Paper': '#bfaa8c',
      'coffee-stain': '#d1c0a8'
    }
  },
  plugins: [],
}