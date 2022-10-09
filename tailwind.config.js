/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
