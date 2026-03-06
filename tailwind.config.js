/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundSize: {
        '200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
      },
    },
  },
  plugins: [],
}