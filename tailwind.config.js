/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      color: {
        cyan: colors.cyan,
        teal: colors.teal,
      },
      fontFamily: {
        body: ['Nunito'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
