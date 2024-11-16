/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        'container': "1320px",
      }, 
      fontFamily:{
        "Raleway-Medium":"Raleway-Medium",
        "Roboto-Bold": "Roboto-Bold",
        "Bebas-Regular": "Bebas-Regular",
        "Roboto-Regular": "Roboto-Regular",
        "open_sans-SemiBold":"open_sans-SemiBold",
        "Roboto-Medium":"Roboto-Medium",
      }
    },
    screens: {
      'xs': '400px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
      '4xl': '1920px'
  },
  },
  plugins: [],
}

