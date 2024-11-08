/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        'container': "80%",
      }, 
      fontFamily:{
        "Raleway-Medium":"Raleway-Medium",
        "Roboto-Bold": "Roboto-Bold",
        "Bebas-Regular": "Bebas-Regular",
        "Roboto-Regular": "Roboto-Regular",
      }
    },
  },
  plugins: [],
}

