/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      screens :{
        'xs': '480px',
      },
      fontFamily: {
        Inter:['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0px 0px 1px 0 rgba(189,192,,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0px 0px 1px 0 rgba(189,192,,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)'
      },
    },
  },
  plugins: [],
}
