/*
 * @Author: 一尾流莺
 * @Description:操作全局配置文件的方法
 * @Date: 2022-12-09 15:32:59
 * @LastEditTime: 2022-12-13 17:54:12
 * @FilePath: \warbler-cli\packages\utils\lib\warbler.js
 */

'use strict';

const { homedir } = require('os');
const path = require('path');
const fse = require('fs-extra');
const { debugLog } = require('./log');

// 向全局的 warbler.json 中写入属性
function writeGlobalConfig(obj) {
  // 获取用户主目录
  const userHome = homedir();
  // 获取全局配置文件 warbler.json 所在的路径
  const globalConfigPath = path.join(userHome, '.warbler-cli', 'warbler.json');
  fse.writeJsonSync(globalConfigPath, obj);
  debugLog(`已向全局配置文件中写入: ${JSON.stringify(obj)}`);
}

module.exports = {
  writeGlobalConfig,
};
