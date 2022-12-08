/*
 * @Author: 一尾流莺
 * @Description:代码格式化 配置文件
 * @Date: 2022-12-07 19:16:52
 * @LastEditTime: 2022-12-08 09:56:57
 * @FilePath: \warbler-cli\.prettierrc.js
 */
module.exports = {
  // 箭头函数只有一个参数的时候可以忽略括号
  arrowParens: 'always',
  // 括号内部不要出现空格
  bracketSpacing: true,
  // 行结束符使用 Unix 格式
  endOfLine: 'lf',
  // true: Put > on the last line instead of at a new line
  jsxBracketSameLine: false,
  // 行宽
  printWidth: 180,
  // 换行方式
  proseWrap: 'preserve',
  // 分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 缩进
  tabWidth: 2,
  // 使用 tab 缩进
  useTabs: false,
  // 后置逗号，多行对象、数组在最后一行增加逗号
  trailingComma: 'all',
};
