'use strict';

const path = require('path');
const { debugLog, warnLog, DEFAULT_REGISTRY, CLI_PACKAGE_NAME } = require('@warbler-fe/cli-utils');
const { resolvePkg, getNpmLatestVersion, semver } = require('@warbler-fe/cli-utils');

// 检查脚手架是否为最新版本
async function checkCliVersion(config) {
  // 获取配置信息中 npm 源的配置项
  const { registry, isShowUpdate } = config;
  // 如果用户配置了忽略版本更新 则直接返回
  if (Object.prototype.hasOwnProperty.call(config, 'isShowUpdate') && !JSON.parse(isShowUpdate)) {
    return;
  }
  if (registry) {
    process.env.NPM_REGISTRY = registry;
    debugLog(`使用用户 npm 源: ${registry}`);
  } else {
    process.env.NPM_REGISTRY = DEFAULT_REGISTRY;
    debugLog(`使用默认 npm 源: ${DEFAULT_REGISTRY}`);
  }
  // 读取 package.json 文件
  const pkg = resolvePkg(path.join(__dirname, '../', '../'));
  // 获取当前版本号和模板名
  const currentVersion = pkg.version;
  debugLog(`本地脚手架版本: ${currentVersion}`);
  const npmName = pkg.name;
  // 调用 npm API , 获取所有版本号
  const latestVersion = await getNpmLatestVersion(
    currentVersion,
    CLI_PACKAGE_NAME,
    process.env.NPM_REGISTRY,
  );
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
