/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:         '#f8f7f4',
        surface:    '#ffffff',
        ink:        '#0d0d0d',
        'ink-2':    '#444444',
        'ink-3':    '#999999',
        accent:     '#1a6bff',
        'accent-dim':'#e8efff',
        border:     '#e4e2dc',
        green:      '#1a9a52',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        'card-lg': '20px',
      },
      boxShadow: {
        card:  '0 2px 12px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)',
        hover: '0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
        'accent-glow': '0 8px 24px rgba(26,107,255,0.3)',
      },
      animation: {
        'float': 'floatAccent 8s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease infinite',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        floatAccent: {
          '0%, 100%': { transform: 'rotate(15deg) translateY(0)' },
          '50%':      { transform: 'rotate(15deg) translateY(-20px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(0.8)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
