module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        glass: 'rgba(255, 255, 255, 0.25)',
      },
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
