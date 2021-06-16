const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  extends: ['next', 'eslint-config-prettier'],
  plugins: ['eslint-plugin-prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
  },
};
