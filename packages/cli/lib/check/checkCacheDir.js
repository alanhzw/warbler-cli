'use strict';

const { homedir } = require('os');
const path = require('path');
const { debugLog, writeGlobalConfig } = require('@warbler-fe/cli-utils');
const { DEFAULT_CLI_CACHE_DIR } = require('../const');

// 检查用户是否设定了文件的缓存目录
function checkCacheDir(config) {
  // 判断配置信息中是否包含用户主目录的配置项
  const { cacheDir } = config;
  if (cacheDir) {
    // 设置 process.env.CLI_CACHE_DIR
    process.env.CLI_CACHE_DIR = cacheDir;
  }
  // 如果没有, 则使用默认的 DEFAULT_CLI_CACHE_DIR, 并且向全局的配置文件中写入
  else {
    // 获取用户主目录
    const userHome = homedir();
    // 获取默认的缓存路径
    const globalConfigDirPath = path.join(userHome, DEFAULT_CLI_CACHE_DIR);
    // 向全局的配置文件中写入 cacheDir 属性
    const writeTargetObj = { cacheDir: globalConfigDirPath };
    writeGlobalConfig(writeTargetObj);
    debugLog(`已向全局配置文件中写入: ${JSON.stringify(writeTargetObj)}`);
    process.env.CLI_CACHE_DIR = globalConfigDirPath;
  }
  debugLog(`缓存目录: ${process.env.CLI_CACHE_DIR}`);
}

module.exports = checkCacheDir;
