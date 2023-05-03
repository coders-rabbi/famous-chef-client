/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'header-bg': '#0F1D22', 
        'logo-color':'#c9ab81',
      },
      container: {
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
}

