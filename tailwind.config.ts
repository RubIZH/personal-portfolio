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
    extend: {
      backgroundImage: {
        'hero-pattern-light':
          "url('assets/images/background-stripes-light.jpg')",
        'hero-pattern-dark': "url('assets/images/background-stripes-dark.jpg')",
      },
      fontFamily: {
        sans: ['Rajdhani', ...defaultTheme.fontFamily.sans],
        serif: ['ITC Garamond', ...defaultTheme.fontFamily.serif],
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
  plugins: [require('@tailwindcss/typography')],
};
