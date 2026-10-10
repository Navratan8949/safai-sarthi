/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand palette
        sky: {
          DEFAULT: '#168FE5',
          50: '#F5FAFF',
          100: '#EAF6FF',
          200: '#D4ECFF',
          300: '#A9D9FF',
          400: '#7EC5FF',
          500: '#168FE5',
          600: '#1277C4',
          700: '#0E5FA3',
          800: '#0A4782',
          900: '#062F61',
        },
        navy: {
          DEFAULT: '#102A43',
          50: '#E8EDF3',
          100: '#D1DBE7',
          200: '#A3B7CF',
          300: '#7593B7',
          400: '#476F9F',
          500: '#2A4A74',
          600: '#102A43',
          700: '#0D2338',
          800: '#0A1C2D',
          900: '#071521',
        },
        ink: {
          DEFAULT: '#243746',
          light: '#5B6B78',
        },
        border: {
          DEFAULT: '#DFEAF2',
        },
        accent: {
          DEFAULT: '#F5A623',
          light: '#FFF3E0',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: '0.75rem',
        md: 'calc(0.75rem - 2px)',
        sm: 'calc(0.75rem - 4px)',
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(16, 42, 67, 0.06)',
        card: '0 4px 24px rgba(16, 42, 67, 0.08)',
        lift: '0 12px 40px rgba(16, 42, 67, 0.12)',
        glow: '0 0 24px rgba(22, 143, 229, 0.15)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fly': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.08)' },
        },
        'bubble': {
          '0%': { transform: 'translateY(0) scale(0.9)', opacity: '0.7' },
          '50%': { transform: 'translateY(-20px) scale(1.1)', opacity: '1' },
          '100%': { transform: 'translateY(0) scale(0.9)', opacity: '0.7' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'fly': 'fly 4.5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'bubble': 'bubble 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};
