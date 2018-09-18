module.exports = {
  globals: {
    document: true,
    navigator: true,
    google: true,
  },
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};