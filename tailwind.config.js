/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
       green: '#1ED760',
      black: '#121212',
      gray: {
        900: '#191414',
      }   
      },
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
      },  
          maxWidth: {
      screen: '100vw',
      },
          keyframes: {
        floatTilt: {
          '0%, 100%': {
            transform: 'translateY(0px) rotateZ(0deg)',
          },
          '25%': {
            transform: 'translateY(-10px) rotateZ(2deg)',
          },
          '50%': {
            transform: 'translateY(-15px) rotateZ(-2deg)',
          },
          '75%': {
            transform: 'translateY(-10px) rotateZ(1.5deg)',
          },
        },
      },
      animation: {
        floatTilt: 'floatTilt 6s ease-in-out infinite',
      },
    

    },
  },
  plugins: [],
}
