/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./screens/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notor: ['NotoSansThai_400Regular'],
        notom: ['NotoSansThai_500Medium'],
        notoe: ['NotoSansThai_600SemiBold'],
        notob: ['NotoSansThai_700Bold']
      }
    },
  },
  plugins: [],
}

