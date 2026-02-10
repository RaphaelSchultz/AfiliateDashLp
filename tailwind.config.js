import typography from '@tailwindcss/typography';

export default {
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
        'orange-glow': '0 4px 16px rgba(255, 107, 53, 0.2)',
      }
    },
  },
  plugins: [
    typography,
  ],
}