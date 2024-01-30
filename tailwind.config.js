/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bkg: "var(--color-bkg)",
        content: "var(--color-content)",
        'cv': {
          50: '#edf8f9',
          100: '#ceecf4',
          200: '#a3dbef',
          300: '#8bcdea',
          400: '#5fb6f2',
          500: '#3592ef',
          600: '#1c79e8',
          700: '#005fea',
          800: '#005ac6',
          900: '#004ba5',
          950: '#00366b',
        }
      },
      fontFamily: {
        sans: "Poppins",
      },
      textColor: {
        'content': "var(--color-content)",
      },
      backgroundColor: {
        'dark-mode': "var(--color-bkg)",
      },
      boxShadow: {
        'cv-xl': '0 0 20px rgb( 0 0 0 / 0.25);'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

