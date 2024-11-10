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
        "open_sans-SemiBold":"open_sans-SemiBold",
        "Roboto-Medium":"Roboto-Medium",
      }
    },
  },
  plugins: [],
}

