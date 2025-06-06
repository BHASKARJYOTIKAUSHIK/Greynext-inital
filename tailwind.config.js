/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // Blue
        secondary: '#10b981', // Green
        accent: '#f59e0b', // Amber
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 