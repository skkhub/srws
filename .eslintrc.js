// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 允许匿名new对象
    'no-new': 0,
    "no-unused-vars": [1, { "vars": "all", "args": "none" }],
    "no-useless-constructor": 0,
    "no-trailing-spaces": 0,
    "padded-blocks": 0,
    "one-var": 0,
    "object-property-newline": 0,
    // else 是否可以换行
    "brace-style": 0
  }
}
