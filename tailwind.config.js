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
          primary: '#C5A059', // Desaturated Mustard Gold from screenshot
          secondary: '#8C3333', // Muted Red from screenshot charts
          dark: '#0A0A0A', // Deep panel gray
          darker: '#000000', // Pure black background
          border: '#222222', // Hairline border color
          gray: {
            100: '#F5F5F5',
            200: '#EAEAEA',
            300: '#A3A3A3',
            400: '#737373',
            500: '#525252',
            600: '#404040',
            700: '#2A2A2A',
            800: '#1A1A1A',
            900: '#0A0A0A'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
