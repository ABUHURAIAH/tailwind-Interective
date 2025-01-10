/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'375px',
      // md:'368px',
      // lg:'368px',
      lg:'1440px'
    },
    extend: {
      fontFamily:{
        sans:['Overpass','sans-serif'],
        Overpass:['serif']
      }
    },
  },
  plugins: [],
}

