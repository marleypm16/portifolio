/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#070B14',
          900: '#0B1120',
          800: '#0F172A',
          700: '#131C2E',
        },
      },
      maxWidth: {
        site: '72rem',
      },
    },
  },
  plugins: [],
}
