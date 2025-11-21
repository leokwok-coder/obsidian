export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#00f5ff',
        accent: '#8b5cf6',
        highlight: '#f59e0b',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}