const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    preserveHtmlElements: false, // remove browser default styling
    content: [
      './src/**/*.html' // remove unused css not found in files iin this array
    ]
  },   
  darkMode: false, // or 'media' or 'class' 
  theme: {
    extend: {
        colors: {
            white:"$blue"
        },
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        serif: ["IBM Plex Serif", ...defaultTheme.fontFamily.serif],
      },      
      container: {
        center: true ,
      }, 
    },
  },
  variants: {
    extend: {},
  },

  plugins: [],
}
