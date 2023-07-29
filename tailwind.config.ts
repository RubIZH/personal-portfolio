const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      serif: ['ITC Garamond'],
    },
    extend: {
      fontFamily: {
        sans: ['Rajdhani', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      colors: {
        amethyst: {
          25: '#FCFAFF',
          50: '#FBF7FD',
          100: '#F5ECFB',
          200: '#ECDDF7',
          300: '#DDC2F0',
          400: '#C89BE5',
          500: '#B373D9',
          600: '#A663CC',
          700: '#8842AE',
          800: '#733A8F',
          900: '#5E3073',
        },
      },
    },
  },
  plugins: [],
};
