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
          primary: '#7C3AED', // Bright Purple
          secondary: '#00D4FF', // Cyan
          dark: '#0B0516', // Deep purple dark from screenshot
          darker: '#06020A', // Darker background
          border: '#2A1F40', // Hairline border color matching theme
          gray: {
            100: '#F4F2FA',
            200: '#EAE6F5',
            300: '#C7BEE6',
            400: '#9B8DC9',
            500: '#7260AA',
            600: '#56458A',
            700: '#3D2F6B',
            800: '#261C47',
            900: '#140D2B'
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
