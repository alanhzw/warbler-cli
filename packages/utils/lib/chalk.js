/*
 * @Author: 一尾流莺
 * @Description:对控制台打印日志的颜色进行封装
 * @Date: 2022-12-09 15:32:59
 * @LastEditTime: 2022-12-12 20:36:01
 * @FilePath: \warbler-cli\packages\utils\lib\chalk.js
 */

'use strict';

const chalk = require('chalk');

const { bold } = chalk;
const debug = chalk.hex('#ff77ff');
const warn = chalk.hex('#f4fd22');
const success = chalk.hex('#9eff6e');
const error = chalk.hex('#ed1515');

module.exports = {
  chalk,
  debug,
  warn,
  success,
  error,
  bold,
};
