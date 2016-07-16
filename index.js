module.exports = {
  extends: [
    "eslint-config-airbnb-base"
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    "quotes": ["error", "double", {"allowTemplateLiterals": true}]
  }
};
