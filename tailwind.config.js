/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-hero': "linear-gradient(90deg, rgba(32,20,239,0) 0%, rgba(0,0,0,0.9473039215686274) 0%, rgba(0,0,0,0.8352591036414566) 27%, rgba(0,0,0,0) 100%), url('https://riadhadrani.github.io/slick-portfolio-svelte/logos/css.svg')",
        
        'light-hero' : "linear-gradient(90deg, rgba(32,20,239,0) 0%, rgba(255,255,255,0.9473039215686274) 0%, rgba(255,255,255,0.8352591036414566) 59%, rgba(0,0,0,0) 100%)"
      },
    },
  },
  plugins: [],
}

