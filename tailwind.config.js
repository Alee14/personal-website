/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'hack': ['Hack', 'sans-serif']
    },
    extend: {
      colors: {
        'material-gray': '#212121',
      },
      backgroundImage: {
        'landing': "url('/temp-landing.png')",
      }
    },
  },
  plugins: [],
}
