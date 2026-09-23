import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#004987',
        bluedeep: '#003968',
        green: '#295C50',
        cream: '#ECE6D7',
        shingle: '#735C57',
        brick: '#816253',
        rail: '#E4E7E8',
        band: '#F2F4F4',
        ink: '#1D2018',
        mute: '#5B5F55'
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif']
      },
      maxWidth: { measure: '56rem' }
    }
  },
  plugins: []
};
export default config;
