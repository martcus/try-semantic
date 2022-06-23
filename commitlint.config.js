// https://commitlint.js.org/

module.exports = {
  extends: ['@commitlint/config-conventional'],
  /*
   * Any rules defined here will override rules from @commitlint/config-conventional
   */
  rules: {
    'header-max-length': [2, 'always', 200],
    'body-max-line-length': [0, 'always', 100], 
  }
};
