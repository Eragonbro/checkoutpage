/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  
  content: ['./*.{html,js}'],
  
  theme: {
    extend: {
      
      fontFamily: {
        inter: ["Inter", 'serif'],
      },

      colors: {
        "design-background": {
          black: "#111729",
          gray: "#D2D5DA",
        
        },
      },

    },
  },

  variants : {
    extend: {},
  },

  plugins: [],
}

