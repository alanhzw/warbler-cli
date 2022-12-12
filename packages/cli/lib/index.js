/*
 * @Author: 一尾流莺
 * @Description: 脚手架主执行程序
 * @Date: 2022-03-04 11:10:26
 * @LastEditTime: 2022-12-12 20:20:40
 * @FilePath: \warbler-cli\packages\cli\lib\index.js
 */

'use strict';

const { errorLog } = require('@warbler-fe/cli-utils');
const { checkNodeVersion, checkRoot, checkUserHome } = require('./check');
const { checkCacheDir, checkCliVersion } = require('./check');

// 脚手架主执行程序
function main() {
  try {
    // 检查 node.js 版本
    checkNodeVersion();
    // 检查是否 root 账户, root 账户会导致各种问题, 所以需要降级
    checkRoot();
    // 检查用户主目录
    checkUserHome();
    // 检查缓存目录;
    checkCacheDir();
    // 检查脚手架是否为最新版本
    checkCliVersion();
  } catch (error) {
    errorLog(error.message);
  }
}

module.exports = main;
