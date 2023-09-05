import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      screens: {
        lg: { max: "1920px" },
        // => @media (max-width: 1023px) { ... }
    
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
    
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
    
        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
    },
    
      animation:{
        Blob:"blob 2s infinite",
        Cloud:"cloud 20s infinite"
      },
      keyframes:{
        blob:{

          "0%" : {
            transform:"scale(1)",
          },

          "33%" : {
            transform:"scale(1.2)",
          },

          "66%" : {
            transform:"scale(0.8)",
          },
          "100%" : {
            transform:"scale(1)",
          },
        },



        cloud:{
          "0%" :{ transform :"translate(0px,0px) "},
          "50%":{ transform :"translate(500px,0px)"},
          "100%":{ transform :"translate(0px,0px) "},
        }
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
