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
      },
      
      keyframes: {
        wave:{
          "0%":{transform:"rotate(0.0deg)"},
          "10%":{transform:"rotate(14deg)"},
          "20%":{transform:"rotate(-8deg)"},
          "30%":{transform:"rotate(14deg)"},
          "40%":{transform:"rotate(-4deg)"}, 
          "50%":{transform:"rotate(10.0deg)"},
          "60%":{transform:"rotate(0.0deg)"},
          "100%":{transform:"rotate(0.0deg)"},

        },

        slide:{
           "0%":{transform:"translateX(-100%)"},
           "100%":{transform:"translateX(0%)"}
     

        },
        slidedown:{
          "0%":{transform:"translateY(-100%)"},
          "50%":{transform:"translateY(8%)"},
          "65%":{transform:"translateY(-4%)"},
          "80%":{transform:"translateY(4%)"},
          "95%":{transform:"translateY(-2%)"},
          "100%":{transform:"translateY(0%)"}

        }

      },
      animation:{
        "waving-hand":"wave 4s linear infinite",
        "slide-in":"slide 3s linear ",
        "slide-down":"slidedown 10s ease"
      },
    },
  },
  plugins: [],
}

