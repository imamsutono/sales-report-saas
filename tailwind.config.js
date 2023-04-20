/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#6D7BFA',
        'primary-light': '#edeffe'
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
    }
  },
  plugins: [],
}
