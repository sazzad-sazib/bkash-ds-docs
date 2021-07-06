const colors =require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utilities/**/*.{js,ts,jsx,tsx}',
    './assets/**/*.{js,ts,jsx,tsx,scss,css}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#d82a77',
      ...colors,
    },
    extend: {},
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
