/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1B',
        'rose-gold': '#E5B1B1',
        'soft-white': '#F8F8F8',
        'deep-black': '#0D0204'
      }
    }
  },
  plugins: [],
}
