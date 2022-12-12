'use strict';

const { homedir } = require('os');
const { pathExists, debugLog } = require('@warbler-fe/cli-utils');

// 检查用户主目录
function checkUserHome() {
  // 获取用户主目录
  const userHome = homedir();
  debugLog(`用户主目录: ${userHome}`);
  // 如果主目录不存在,抛出异常
  if (!userHome || !pathExists.sync(userHome)) {
    throw new Error('当前登录用户主目录不存在');
  }
}

module.exports = checkUserHome;
