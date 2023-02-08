/*
 * @Author: 一尾流莺
 * @Description:操作全局配置文件的方法
 * @Date: 2022-12-09 15:32:59
 * @LastEditTime: 2023-02-08 15:53:20
 * @FilePath: \warbler-cli\packages\utils\lib\warbler.js
 */

'use strict';

const { homedir } = require('os');
const path = require('path');
const fse = require('fs-extra');
const { DEFAULT_CLI_CACHE_DIR, DEFAULT_CONFIG_NAME } = require('./const');

// 获取全局配置文件 warbler.json 所在的路径
const globalConfigPath = path.join(homedir(), DEFAULT_CLI_CACHE_DIR, DEFAULT_CONFIG_NAME);

// 获取全局 warbler.json
function readGlobalConfig() {
  return fse.readJsonSync(globalConfigPath);
}

// 向全局的 warbler.json 中写入属性
function writeGlobalConfig(obj) {
  const config = readGlobalConfig();
  Object.assign(config, obj);
  fse.writeJsonSync(globalConfigPath, config);
}

module.exports = {
  readGlobalConfig,
  writeGlobalConfig,
};
