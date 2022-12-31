/*
 * @Author: 一尾流莺
 * @Description: 脚手架主执行程序
 * @Date: 2022-03-04 11:10:26
 * @LastEditTime: 2022-12-31 14:46:51
 * @FilePath: \warbler-cli\packages\cli\lib\index.js
 */

'use strict';

const { errorLog } = require('@warbler-fe/cli-utils');
const { checkNodeVersion, checkRoot, checkUserHome } = require('./check');
const { checkCacheDir, checkCliVersion, checkConfig, checkDebug } = require('./check');
const registerCommand = require('./registerCommand');

// 脚手架主执行程序
async function main() {
  try {
    // 检查是否开启调试模式
    checkDebug();
    // 检查 node.js 版本
    checkNodeVersion();
    // 检查是否 root 账户, root 账户会导致各种问题, 所以需要降级
    checkRoot();
    // 检查用户主目录
    checkUserHome();
    // 检查配置文件
    const config = checkConfig();
    // 检查缓存目录;
    checkCacheDir(config);
    // 检查脚手架是否为最新版本
    await checkCliVersion(config);
    // 注册命令
    await registerCommand(config);
  } catch (error) {
    errorLog(error.message);
  }
}

module.exports = main;
