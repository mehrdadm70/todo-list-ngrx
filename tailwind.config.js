/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8BBD0',    // صورتی پاستیلی
        secondary: '#B3E5FC',  // آبی پاستیلی
        accent: '#DCEDC8',     // سبز پاستیلی
        danger: '#FFCDD2',     // قرمز پاستیلی
        success: '#C8E6C9',    // سبز روشن
        background: '#F5F5F5', // خاکستری روشن
      },
    },
  },
  plugins: [],
} 