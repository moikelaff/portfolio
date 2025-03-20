/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          brandBeige: '#EBD7CF',
          brandBrown: '#22140B',
        },
        fontFamily: {
          cinzel: ['Cinzel', 'serif'],
        },
        backdropBlur: {
          xs: '2px',
        },
      },
    },
    plugins: [],
  }