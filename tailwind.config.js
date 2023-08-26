/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      backgroundColor: {
        "bg-pink-thin": "#EDBBD840",
        "bg-pink-thick": "#FFE7E210",
      },
      textColor:{
        "text-brown-original": "#2B2730",
      },
    },
  },
  plugins: [],
}