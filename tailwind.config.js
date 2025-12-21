/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0e17',
        surface: 'rgba(255, 255, 255, 0.05)',
        gold: {
          DEFAULT: '#d4af37',
          glow: '#f9d76e',
        },
        kai: {
          dark: '#4a0412',
          DEFAULT: '#800020',
          light: '#b3002d',
        },
        alistair: {
          dark: '#3b0066',
          DEFAULT: '#7b00cc',
          light: '#a64dff',
        },
        salvatore: {
          dark: '#4a6fa5',
          DEFAULT: '#88b0d6', // Moonstone/Silver-blue
          light: '#c2dcf2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
