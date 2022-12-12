module.exports = {
  env: { browser: true, commonjs: true, es2021: true, node: true },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: { ecmaVersion: 'latest' },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 是否允许 'use strict';
    strict: 0,
    // 是否允许 动态 require
    'import/no-dynamic-require': 0,
    // 规定 if else 的书写方式
    'brace-style': 0,
    'object-curly-newline': 0,
    // 允许函数先调用 后声明
    'no-use-before-define': ['error', { functions: false }],
  },
};
