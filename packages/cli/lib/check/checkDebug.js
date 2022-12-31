'use strict';

const { debugLog, minimist, getUserArgv, changeLogLevel } = require('@warbler-fe/cli-utils');

// 检查是否开启调试模式, 可以查看到一些调试模式下的日志
function checkDebug() {
  // 获取用户参数
  const args = minimist(getUserArgv());
  // 判断是否传入了 --ignore-warning, 忽略提示信息以及调试信息
  if (args['ignore-warning']) {
    changeLogLevel('success');
    return;
  }
  // 判断是否传入了 -D , --debug 开启调试模式
  if (args.debug || args.D) {
    changeLogLevel('debug');
    debugLog('已开启调试模式');
  }
}

module.exports = checkDebug;
