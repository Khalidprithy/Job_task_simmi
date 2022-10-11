/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ef4444",

          "secondary": "#facc15",

          "accent": "#1f2937",

          "neutral": "#16141F",

          "base-100": "#F0F2F4",

          "info": "#437EC7",

          "success": "#059669",

          "warning": "#eab308",

          "error": "#be123c",
        },
      },
    ],
  },
  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],
}