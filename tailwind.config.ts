import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          deep: '#1A0A2E',
          dark: '#2D1B4E',
          mid: '#5B2D6E',
          bright: '#8B3A6B',
        },
        rose: {
          DEFAULT: '#C45A7C',
          light: '#E8A0B0',
        },
        pink: {
          bg: '#FDF0F4',
          soft: '#FEF0F5',
        },
        accent: {
          pink: '#E870A0',
          teal: '#60C8A8',
          gold: '#F0C840',
          lavender: '#C090F0',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(160deg, #1A0A2E 0%, #2D1B4E 20%, #5B2D6E 40%, #8B3A6B 55%, #C45A7C 70%, #E8A0B0 85%, #FDF0F4 100%)',
        'cta-gradient': 'linear-gradient(160deg, #2D1B4E 0%, #5B2D6E 40%, #8B3A6B 70%, #C45A7C 100%)',
        'card-featured': 'linear-gradient(160deg, #5B2D6E, #8B3A6B)',
        'btn-primary': 'linear-gradient(135deg, #E870A0, #C050D0)',
        'shimmer': 'linear-gradient(90deg, #FFB0C8, #80E8C8, #D0B0F8, #FFB0C8)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'shimmer': 'shimmer 8s linear infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
