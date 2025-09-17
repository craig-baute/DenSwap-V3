/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        'brand': {
          'primary': '#2D9B7A',
          'dark': '#1A4B3A', 
          'light': '#4DB599'
        },
        // Primary Colors
        'primary': {
          500: '#2D9B7A'
        },
        'forest': {
          800: '#1A4B3A'
        },
        'secondary': {
          400: '#4DB599'
        },
        'sage': {
          200: '#A8D8C8'
        },
        // Status Colors
        'success': {
          500: '#28A745'
        },
        'warning': {
          500: '#FD7E14'
        },
        'danger': {
          500: '#DC3545'
        },
        'info': {
          500: '#17A2B8'
        },
        // Neutral Colors
        'neutral': {
          50: '#F8F9FA',
          500: '#6C757D',
          900: '#343A40'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
