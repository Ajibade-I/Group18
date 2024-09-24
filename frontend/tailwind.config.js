/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens :{
        laptopSmall: { max: '1024px' },
        tablet: { max: '768px' },
        premobile: { max: '650px' },
        premobile1: { max: '550px' },
      
        phone: { max: '375px' },
        radio: { max: '330px' },
        sm: '640px',
        
        lg: '1024px',
        xlg:"1440px",
        xl: '1280px',
        '2xl': '1536px'
      }
    },
  },
  plugins: [],
}

