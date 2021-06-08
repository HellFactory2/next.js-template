module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        glass: 'rgba(255, 255, 255, 0.25)',
      }),
      backgroundImage: {
        default: 'url(/img/bg-default.min.jpg)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
