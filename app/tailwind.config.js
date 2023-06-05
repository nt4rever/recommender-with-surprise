/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        primaryHover: '#f4402f',
        primary: '#F65D4E',
        secondary: '#FCEDEC',
        bgBlank: '#F7F7F7'
      },
      keyframes: {
        buttonArrowHover: {
          '0%': {
            transform: 'translateX(0px)',
            opacity: 1
          },
          '40%': {
            transform: 'translateX(3px)',
            opacity: 0
          },
          '60%': {
            transform: 'translateX(-3px)',
            opacity: 0
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: 1
          }
        }
      },
      animation: {
        buttonArrowHover: 'buttonArrowHover 0.3s ease-in-out'
      },
      backgroundImage: {
        'paper-pattern': "url('/404.png')"
      }
    }
  },
  plugins: []
};
