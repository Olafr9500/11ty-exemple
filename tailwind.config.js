/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,md,njk,js,ts,svg}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: ['light']
  }
}

