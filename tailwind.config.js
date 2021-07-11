module.exports = {
  // mode: 'jit',
  // jit is off due to we need all the classes to show in live preview however
  // jit only compiles classes we are using. so site maybe little slow on first load
  purge: ['./pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utilities/**/*.{js,ts,jsx,tsx}',
    './assets/**/*.{js,ts,jsx,tsx,scss,css}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d82a77',
          100: '#FBE4E4',
          300: '#FAA6C4',
          400: '#F56EA1',
          500: '#d82a77',
          700: '#C21663',
        },
        green: {
          DEFAULT: '#22C55E',
          100: '#DCFCE7',
          500: '#22C55E',
          700: '#15803D',
        }
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      flex: ['group-hover'],
      alignItems: ['group-hover'],
      justifyContent: ['group-hover'],
      ringOpacity: ['focus'],
      backgroundColor: ['active'],
      textColor: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
