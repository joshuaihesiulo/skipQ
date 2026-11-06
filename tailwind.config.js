/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b1d12',
        mut: '#4a5f50',
        line: '#d8e8d2',
        soft: '#eaf9e4',
        g: '#1f8f22',
        lime: '#5dc91b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        anton: ['Anton', 'Impact', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
