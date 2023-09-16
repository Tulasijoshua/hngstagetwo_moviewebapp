/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        
      },
      colors: {
        brownClr: "rgb(213,145,80)",
        blackClr: "#000",
        whiteClr: "#fff",
        darkBlue: "#000c66"
      }
    },
  },
  plugins: [],
}