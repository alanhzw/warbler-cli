'use strict';

const path = require('path');
const { debugLog, warnLog, DEFAULT_REGISTER } = require('@warbler-fe/cli-utils');
const { resolvePkg, getNpmLatestVersion, semver } = require('@warbler-fe/cli-utils');

// 检查脚手架是否为最新版本
async function checkCliVersion(config) {
  // 获取配置信息中 npm 源的配置项
  const { register } = config;
  if (register) {
    process.env.NPM_REGISTER = register;
    debugLog(`使用用户 npm 源: ${register}`);
  } else {
    process.env.NPM_REGISTER = DEFAULT_REGISTER;
    debugLog(`使用默认 npm 源: ${DEFAULT_REGISTER}`);
  }
  // 读取 package.json 文件
  const pkg = resolvePkg(path.join(__dirname, '../', '../'));
  // 获取当前版本号和模板名
  const currentVersion = pkg.version;
  debugLog(`本地脚手架版本: ${currentVersion}`);
  const npmName = pkg.name;
  // 调用 npm API , 获取所有版本号
  const latestVersion = await getNpmLatestVersion(currentVersion, 'vue', process.env.NPM_REGISTER);
  if (latestVersion) debugLog(`最新脚手架版本: ${latestVersion}`);
  // 如果最新版本存在并且大于当前版本
  if (latestVersion && semver.gt(latestVersion, currentVersion)) {
    console.log();
    warnLog(`请更新版本: 当前版本: ${currentVersion}, 最新版本: ${latestVersion} `);
    warnLog(`更新命令: npm install -g ${npmName}`);
    console.log();
  }
}

module.exports = checkCliVersion;
