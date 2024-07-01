/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'matte-navy': '#2c3e50',   // Matte Navy Blue
        'bright-orange': '#ff6600', // Bright Orange
        'white': '#ffffff',         // White
      },
      fontFamily: {
        'sans': ['Roboto Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
