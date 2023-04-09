'use strict';

const path = require('path');
const { fse, debugLog } = require('@warbler-fe/cli-utils');
const { DEFAULT_CLI_CACHE_DIR, DEFAULT_CONFIG_NAME } = require('@warbler-fe/cli-utils');
const { homedir } = require('os');

// 检查配置文件
function checkConfig() {
  // 读取全局配置文件
  const globalConfig = checkGlobalConfig();
  // 读取用户配置文件
  const userConfig = checkUserConfig();
  // 合并配置文件, 优先级: 用户配置文件 > 全局配置文件
  const config = {
    ...globalConfig,
    ...userConfig,
  };
  return config;
}

// 读取全局配置文件
function checkGlobalConfig() {
  // 获取用户主目录
  const userHome = homedir();
  // 获取 .warbler-cli 所在的目录路径
  const globalConfigDirPath = path.join(userHome, DEFAULT_CLI_CACHE_DIR);
  // 检查是否存在 .warbler-cli 目录, 不存在就创建一个
  fse.ensureDirSync(globalConfigDirPath);
  // 获取全局配置文件 warbler.json 所在的路径
  const globalConfigPath = path.join(globalConfigDirPath, DEFAULT_CONFIG_NAME);
  debugLog(`全局配置文件所在目录: ${globalConfigPath}`);
  // 判断是否存在 warbler.json 文件, 不存在就创建一个, 默认配置为 {}
  if (!fse.existsSync(globalConfigPath)) {
    fse.writeJsonSync(globalConfigPath, {});
  }
  // 获取全局配置文件内容
  return fse.readJsonSync(globalConfigPath);
}

// 读取用户配置文件
function checkUserConfig() {
  // 获取用户项目根目录 (执行 npm run xxx 命令的目录)
  const userConfigDirPath = process.cwd();
  // 获取用户配置文件 warbler.json 所在路径
  const userConfigPath = path.join(userConfigDirPath, DEFAULT_CONFIG_NAME);
  debugLog(`用户配置文件所在目录: ${userConfigPath}`);
  // 判断是否存在 warbler.json 文件, 存在的话合并配置文件, 不存在返回 {}
  if (fse.existsSync(userConfigPath)) {
    return fse.readJsonSync(userConfigPath);
  }
  return {};
}

module.exports = checkConfig;
