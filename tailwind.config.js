/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'cblueustom-dark-': '#0d3048',
      },
      backgroundColor: {
        'custom-dark-blue': '#0D3048',
        'custom-dark-blue-hover': 'rgba(13, 48, 72, 0.8)',
      },
      textColor: {
        'custom-dark-blue': '#0D3048',
      },
      borderColor: {
        'custom-dark-blue': '#0D3048',
      }
    },
  },
  plugins: [],
}
