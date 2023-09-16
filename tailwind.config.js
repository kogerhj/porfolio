/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: {
            "powder-blue": "#e4f1fe",
            "sky-blue": "#8dc6ff",
            "dark-gray": "#22313f",
            "light-gray": "#34495e",
        },
    },
  },
  plugins: [],
}

