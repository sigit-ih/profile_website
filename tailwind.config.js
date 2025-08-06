/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Google Sans', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

