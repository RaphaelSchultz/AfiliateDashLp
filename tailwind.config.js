import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          hover: '#FF5722',
        },
        secondary: {
          DEFAULT: '#2DD4BF',
          light: '#5EEAD4',
        },
        neutral: {
          cream: '#FDFBF7',
          warmBeige: '#F5F1E8',
          lightGray: '#F8F8F8',
          mediumGray: '#9CA3AF',
          charcoal: '#1F2937',
          darkCharcoal: '#111827',
        },
        accent: {
          yellow: '#FDB022',
          yellowPale: '#FEF3C7',
          green: '#10B981',
          greenLight: '#D1FAE5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'soft-md': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.1)',
        'soft-xl': '0 12px 36px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        shimmer: 'shimmer 3s infinite linear',
        fireFlicker: 'fireFlicker 0.4s ease-in-out infinite alternate',
        rocketShake: 'rocketShake 0.5s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        fireFlicker: {
          '0%': { transform: 'scaleY(1) translateY(0)', opacity: '0.7' },
          '100%': { transform: 'scaleY(1.4) translateY(-2px)', opacity: '1' },
        },
        rocketShake: {
          '0%, 100%': { transform: 'rotate(45deg) translate(0px, 0px)' },
          '20%': { transform: 'rotate(43deg) translate(-1px, -1.5px)' },
          '40%': { transform: 'rotate(47deg) translate(1px, -0.5px)' },
          '60%': { transform: 'rotate(44deg) translate(-0.5px, -2px)' },
          '80%': { transform: 'rotate(46deg) translate(0.5px, -1px)' },
        },
      }
    },
  },
  plugins: [
    typography,
  ],
}