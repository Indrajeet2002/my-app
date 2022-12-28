/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'cardIn': 'cardIn 4s linear',
        'cardOut': 'cardOut 2s linear'
      },
      keyframes: {
        cardIn: {
          '0%': { transform: 'translateX(-20%)', opacity:'0'},
          '100%': { transform: 'translateX(0%)', opacity: '1'},
        },
        cardOut: {
          '0%': { transform: 'translateX(0%)', opacity:'1'},
          '100%': { transform: 'translateX(20%)', opacity: '0'},
        },
      },
    },
  },
  plugins: [],
}
