module.exports = {
  env: {
    browser: true
  },
  extends: [
    'standard',
    'standard-jsx'
  ],
  globals: {
    React: false,
    jQuery: false,
    $: false
  },
  plugins: [
    'react'
  ],
  parser: 'babel-eslint',
  rules: {
    'no-dupe-keys': 'off',
    'no-var': 'off',
    'complexity': 'off',
    'indent': 'off'
  }
};
