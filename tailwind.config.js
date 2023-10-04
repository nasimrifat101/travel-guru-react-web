/** @type {import('tailwindcss').Configuration} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}
