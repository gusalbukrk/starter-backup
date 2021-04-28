module.exports = {
  '*.(js|jsx)':
    'eslint --cache --fix --ignore-pattern "**/*.spec.js" --ignore-pattern "**/*.spec.jsx" --ignore-pattern "**/__tests__/**"',
  '*.(css|scss|sass)': 'stylelint --fix',
};
