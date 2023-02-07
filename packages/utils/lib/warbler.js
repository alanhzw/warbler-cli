/*
 * @Author: 一尾流莺
 * @Description:操作全局配置文件的方法
 * @Date: 2022-12-09 15:32:59
 * @LastEditTime: 2023-02-07 10:55:06
 * @FilePath: \warbler-cli\packages\utils\lib\warbler.js
 */

'use strict';

const { homedir } = require('os');
const path = require('path');
const fse = require('fs-extra');

// 获取全局配置文件 warbler.json 所在的路径
const globalConfigPath = path.join(homedir(), '.warbler-cli', 'warbler.json');

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
