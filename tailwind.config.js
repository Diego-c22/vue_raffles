module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#69a8e5',
        'primary_dark': '#636B73',
        'primary_light': '#64D9D5',
        'secundary': '#A6423C',
        'secundary_light': '#DEAB9D',
        'warning': '#901e1e'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}