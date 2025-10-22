/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        green: '#1ED760',
        black: '#121212',
        gray: {
          900: '#191414',
          200: '#221f1f',
          100: '#2e2b2b',
        },

        light: {
          bg: '#F9F9F9',       
          card: '#FFFFFF',     
          text: '#1A1A1A',     
          subtext: '#4A4A4A',  
          border: '#E5E5E5',   
          accent: '#4d7cbf',    
          hover: '#F0F0F0',    

          skin: '#fdf3d6',
          'light-blue': '#cfe1f4',
        },
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
        floating3d: {
          '0%, 100%': {
            transform: 'translateX(0px) translateY(0px) rotateZ(0deg)',
          },
          '20%': {
            transform: 'translateX(-5px) translateY(-10px) rotateZ(1deg)',
          },
          '40%': {
            transform: 'translateX(5px) translateY(-15px) rotateZ(-1.1deg)',
          },
          '60%': {
            transform: 'translateX(-4px) translateY(-8px) rotateZ(1.1deg)',
          },
          '80%': {
            transform: 'translateX(3px) translateY(-12px) rotateZ(-0.9deg)',
          },
        },
      },

      animation: {
        floatTilt: 'floatTilt 6s ease-in-out infinite',
        floating3d: "floating3d 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
