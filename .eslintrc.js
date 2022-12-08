/*
 * @Author: 一尾流莺
 * @Description:代码规范 配置文件
 * @Date: 2022-12-07 19:12:05
 * @LastEditTime: 2022-12-08 09:57:24
 * @FilePath: \warbler-cli\.eslintrc.js
 */
module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
};
