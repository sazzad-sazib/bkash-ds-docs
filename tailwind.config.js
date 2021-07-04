const colors =require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
      typography:(theme)=> ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.400'),
            pre: {
              colors: theme('colors.gray.50')
            }
          },
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
