'use strict';

const { pkg, debugLog, getNpmSemverVersion, semver } = require('@warbler-fe/cli-utils');

// 检查脚手架是否为最新版本
async function checkCliVersion() {
  // 获取当前版本号和模板名
  const currentVersion = pkg.version;
  debugLog(`本地脚手架版本: ${currentVersion}`);
  const npmName = pkg.name;
  console.log('🚀🚀 ~ npmName', npmName);
  // 调用 npm API , 获取所有版本号
  const lastVersion = await getNpmSemverVersion(currentVersion, 'vue');
  if (lastVersion) debugLog(`最新脚手架版本: ${currentVersion}`);
  // 如果最新版本存在并且大于当前版本
  if (lastVersion && semver.gt(lastVersion, currentVersion)) {
    debugLog(`请更新版本: 当前版本: ${currentVersion}, 最新版本:${lastVersion} `);
    debugLog(`更新命令: npm install -g ${npmName}`);
  }
}

module.exports = checkCliVersion;
