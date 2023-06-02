/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#0C1228', 
        secondaryBg: '#040E2F', 
        bgHover: '#273250',
        custom: {
          100: '#F0F0F0', // Custom color with variant
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

