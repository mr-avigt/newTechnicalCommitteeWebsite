/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { colors: {
      'custom-border': '#f4cf8b', // Replace with your hex color
    },
    screens: {
      'min400': '400px', // Custom breakpoint for min-width 400px
    },},
  },
  plugins: [],
}