/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        voltcraft: {
          primary: '#0066FF',
          secondary: '#00D4AA',
          dark: '#0A0F1C',
          darker: '#060912',
          accent: '#FF6B35',
          gray: {
            100: '#F5F7FA',
            200: '#E4E7EB',
            300: '#CBD2D9',
            400: '#9AA5B1',
            500: '#7B8794',
            600: '#616E7C',
            700: '#3E4C59',
            800: '#1F2933',
            900: '#121826'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 102, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
