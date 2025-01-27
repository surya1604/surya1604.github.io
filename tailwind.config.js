/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor1: '#F6A0AC',
        customColor2: '#A1C3E7',
        customColor3: '#908DCE',
        customColor4: '#E47C9C',
        customColor5: '#FFD87D',
        customColor6: '#D99BD8',
        customColor7: '#B7C396',
      },
      backdropBlur: {
        sm: '4px',
        DEFAULT: '8px',
        lg: '16px',
        xl: '24px',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'slide-vertical': 'slideVertical 7s linear infinite',
      },
      keyframes: {
        slideVertical: {
          '0%': { transform: 'translateY(100%)' },
          '33.33%': { transform: 'translateY(0%)' },
          '66.66%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(-200%)' },
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
};
