import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        orange: {
          DEFAULT: '#F97316',
          50:  '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        slate: {
          50:  '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        hero: {
          bg: '#FEF9F7',
          warm: '#FFF5F0',
        },
        blue: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          600: '#2563EB',
        },
        green: {
          400: '#4ADE80',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'orange-glow':    '0px 8px 25px -8px rgba(249, 115, 22, 0.5)',
        'orange-glow-lg': '0px 20px 40px rgba(249, 115, 22, 0.15)',
        'orange-soft':    '0px 20px 40px rgba(249, 115, 22, 0.05)',
        'card':           '0 4px 24px rgba(0,0,0,0.04)',
        'card-hover':     '0 8px 32px rgba(0,0,0,0.08)',
        'navbar':         '0px 8px 30px rgb(0,0,0,0.04)',
      },
      animation: {
        shine:        'shine 3s infinite',
        glowPulse:    'glowPulse 2s ease-in-out infinite',
        rocketShake:  'rocketShake 0.5s ease-in-out infinite',
        pulse2:       'pulse 2s infinite',
        float:        'float 6s ease-in-out infinite',
        'float-a':    'float 4.5s ease-in-out infinite',
        'float-b':    'float 4.8s ease-in-out infinite 0.4s',
        'float-c':    'float 5.2s ease-in-out infinite 0.2s',
        'float-d':    'float 5.4s ease-in-out infinite 0.6s',
        'float-card': 'float 5s ease-in-out infinite 0.3s',
        'float-card2':'float 5.4s ease-in-out infinite 0.8s',
      },
      keyframes: {
        shine: {
          '0%':   { transform: 'skewX(-20deg) translateX(-100%)' },
          '60%':  { transform: 'skewX(-20deg) translateX(300%)' },
          '100%': { transform: 'skewX(-20deg) translateX(300%)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(249, 115, 22, 0.3)' },
          '50%':      { boxShadow: '0 0 30px rgba(249, 115, 22, 0.6)' },
        },
        rocketShake: {
          '0%, 100%': { transform: 'rotate(0deg) translate(0px, 0px)' },
          '20%':  { transform: 'rotate(-2deg) translate(-1px, -1.5px)' },
          '40%':  { transform: 'rotate(2deg) translate(1px, -0.5px)' },
          '60%':  { transform: 'rotate(-1deg) translate(-0.5px, -2px)' },
          '80%':  { transform: 'rotate(1deg) translate(0.5px, -1px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [typography],
};
