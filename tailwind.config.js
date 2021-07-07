const colors =require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  // mode: 'jit',
  // jit is off due to we need all the classes to show in live preview however
  // jit only compiles classes we are using. so site maybe little slow on first load
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
      display: ['group-hover'],
      flex: ['group-hover'],
      alignItems: ['group-hover'],
      justifyContent: ['group-hover'],
      ringOpacity: ['focus']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
