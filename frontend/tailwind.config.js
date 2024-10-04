/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: { 
        'primary' : ["Poppins", "sans-serif"]
      },
      colors: {
        'primary' : "#3b82f6"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}