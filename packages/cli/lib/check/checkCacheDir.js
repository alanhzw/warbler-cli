'use strict';

const { homedir } = require('os');
const path = require('path');
const { dotenv, pathExists, debugLog } = require('@warbler-fe/cli-utils');
const { DEFAULT_CLI_CACHE_DIR } = require('../const');

// 获取用户主目录
const userHome = homedir();

// 检查用户是否设定了文件的缓存目录
function checkCacheDir() {
  // 获取用户环境变量所在的路径
  const dotenvPath = path.resolve(userHome, '.env');
  // 如果路径存在
  if (pathExists(dotenvPath)) {
    // 把 .env 的环境变量放在 process.env 里
    dotenv.config({
      path: dotenvPath,
    });
  }
  // 如果用户没有设置 .env 文件中的缓存目录, 创建默认的缓存目录
  createDefaultCacheDir();
}

// 创建默认的缓存目录配置
function createDefaultCacheDir() {
  let cacheDir = '';
  // 如果 CLI_CACHE_DIR 存在 使用 CLI_CACHE_DIR
  if (process.env.CLI_CACHE_DIR) {
    cacheDir = path.join(userHome, process.env.CLI_CACHE_DIR);
  }
  // 如果 CLI_CACHE_DIR 不存在 使用默认配置
  else {
    cacheDir = path.join(userHome, DEFAULT_CLI_CACHE_DIR);
  }
  // 设置 process.env.CLI_HOME_PATH
  process.env.CLI_HOME_PATH = cacheDir;
  debugLog(`缓存目录: ${cacheDir}`);
}

module.exports = checkCacheDir;
