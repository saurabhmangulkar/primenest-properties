/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF8F5',
          100: '#F4EFEA',
          200: '#E8DFD5',
        },
        charcoal: {
          800: '#1F2421',
          900: '#141715',
          950: '#0C0E0D',
        },
        accent: {
          DEFAULT: '#9E7D53',
          hover: '#876942',
          light: '#F8F4EE',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};