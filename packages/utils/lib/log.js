/*
 * @Author: 一尾流莺
 * @Description:对控制台打印日志进行封装
 * @Date: 2022-12-08 21:32:53
 * @LastEditTime: 2022-12-12 16:19:02
 * @FilePath: \warbler-cli\packages\utils\lib\log.js
 */

'use strict';

const log = require('npmlog');
const { debug, warn, success, error, bold } = require('./chalk');

// 从环境变量中读取 log.level , 默认为 "info"
// log.level 的作用是: 只有达到 level 设置的权重，log 才会在控制台被输出
log.level = process.env.LOG_LEVEL || 'info';

// 定制 log 的 level    参数: (名称,权重,配置,命令行显示文本)
log.addLevel('debug', 4000, {}, debug('♋调试模式'));
log.addLevel('warn', 4000, {}, warn('💛友情提示'));
log.addLevel('success', 4000, {}, success('✅运行成功'));
log.addLevel('error', 4000, {}, error('❌发生错误'));

// 定制 log 的标题
log.heading = 'warbler';
// 定制 log 标题的样式
log.headingStyle = { fg: 'blue', bg: 'black', bold: true };

// npmlog 的第一个参数 是前缀,而且是必传 但是我们不需要这个参数
// 所以为了在使用的时候不传第一个参数, 需要再封装一层
const debugLog = (message) => {
  log.debug('', bold(message));
};
const warnLog = (message) => {
  log.warn('', bold(message));
};
const successLog = (message) => {
  log.success('', bold(message));
};
const errorLog = (message) => {
  log.error('', bold(message));
};

// 切换 log 等级
const changeLogLevel = (level) => {
  log.level = level;
};

module.exports = {
  debugLog,
  warnLog,
  successLog,
  errorLog,
  changeLogLevel,
};
