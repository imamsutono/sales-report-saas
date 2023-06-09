/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#6D7BFA',
        'primary-light': '#edeffe',
        'cyan-custom': '#6DC7FA',
        'gray-footer': '#F4F5F7',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        '510': '510px',
      }
    },
    container: {
      padding: '2rem'
    },
    animatedSettings: {
      classes: ['fadeInUp']
    }
  },
  plugins: [
    require('tailwindcss'),
    require('tailwindcss-animatecss'),
  ],
}
