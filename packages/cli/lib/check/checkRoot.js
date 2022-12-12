'use strict';

const { rootCheck, debugLog } = require('@warbler-fe/cli-utils');

// 检查是否 root 用户, root 用户会导致各种问题, 所以需要降级
function checkRoot() {
  debugLog('已检查并自动降低用户权限');
  // 执行后会自动做降级处理
  rootCheck();
}

module.exports = checkRoot;
