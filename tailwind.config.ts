import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          50: '#f8f3ef',
          100: '#f1e6db',
          200: '#e3ccb6',
          300: '#d3ab89',
          400: '#c38961',
          500: '#a96a40', // clay brown
          600: '#8b5433',
          700: '#6e422a',
          800: '#563524',
          900: '#452b1e',
        },
        sandstone: {
          100: '#fde9d8',
          200: '#f9d1b0',
          300: '#f3b784', // sandstone orange
          400: '#e89a58',
          500: '#cf7d38',
        },
        ivory: '#faf7f1',
        gold: '#c9a227',
        leaf: '#5b7f5b',
      },
      fontFamily: {
        heading: ['var(--font-playfair)'],
        body: ['var(--font-poppins)'],
      },
      backgroundImage: {
        'paper-texture': "url('/textures/paper.svg')",
        'mandala-border': "url('/textures/mandala-border.svg')",
      },
      boxShadow: {
        warm: '0 10px 30px -12px rgba(169,106,64,0.35)',
        gold: '0 0 0 2px #c9a22766',
      },
    },
  },
  plugins: [],
};

export default config;
