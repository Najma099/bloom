/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        snow: '#FAFBFC',
        glacier: '#E2E8F0',
        sage: '#94A89A',
        'sage-light': '#EBF0EC',
        blush: '#D4A0A0',
        'blush-hover': '#C88E8E',
        'blush-light': '#F9EDED',
        charcoal: '#1C2128',
        mist: '#6B7A80',
        surface: '#F0F4F7',
        // Bloom palette
        bloom: {
          lavender: '#C8B6E2',
          rose: '#E8A0BF',
          peach: '#F6C1A3',
          sage: '#A8C3A0',
          cream: '#FAF7F2',
          plum: '#5A3E6B',
          coral: '#FF8C7A',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '7xl': '4.5rem',
        '8xl': '6rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(28, 33, 40, 0.06)',
        'card': '0 4px 32px rgba(28, 33, 40, 0.08)',
        'blush': '0 4px 24px rgba(212, 160, 160, 0.25)',
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'drift': 'drift 8s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.08)', opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-12px) translateX(8px)' },
          '66%': { transform: 'translateY(8px) translateX(-6px)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 140, 122, 0.2)' },
          '50%': { boxShadow: '0 0 0 12px rgba(255, 140, 122, 0)' },
        },
      },
    },
  },
  plugins: [],
};