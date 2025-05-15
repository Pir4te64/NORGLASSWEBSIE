// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx,html}'
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1E40AF',
          secondary: '#64748B',
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        },
      },
    },
    plugins: [],
  }
  