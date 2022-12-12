'use strict';

const { semver, getNodeVersion, chalk, debugLog } = require('@warbler-fe/cli-utils');
const { LOWEST_NODE_VERSION } = require('../const');

// 检查 node.js 版本
function checkNodeVersion() {
  // 获取当前 node.js 版本号
  const currentNodeVersion = getNodeVersion();
  debugLog(`最低 node.js 版本: ${LOWEST_NODE_VERSION}`);
  debugLog(`当前 node.js 版本: ${currentNodeVersion}`);
  // 比对最低版本号
  if (!semver.gte(currentNodeVersion, LOWEST_NODE_VERSION)) {
    throw new Error(`node.js 版本过低, 需要安装 ${chalk.red(LOWEST_NODE_VERSION)} 及其以上版本`);
  }
}

module.exports = checkNodeVersion;
