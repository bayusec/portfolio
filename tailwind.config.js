/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gitsAzul': {
          100: '#1b637b',
          DEFAULT: '#79b0cf',
          200: '#183b75',
          300: '#17264f',
        },
        'gitsVerde': {
          DEFAULT: '#529fa9',
          100: '#16988e',
          200: '#1c7476'
        },
        'gitsLila': {
          DEFAULT: '#c3cbe0',
          100: '#9d8992',
          200: '#747280'
        },
        'transparent': 'transparent',
      }
    },
  },
  plugins: [],
}