/*
 * @Author: 一尾流莺
 * @Description:环境相关的方法
 * @Date: 2022-12-09 18:16:23
 * @LastEditTime: 2022-12-15 10:06:31
 * @FilePath: \warbler-cli\packages\utils\lib\env.js
 */

'use strict';

// 操作系统
const isWindows = process.platform === 'win32';
const isMacintosh = process.platform === 'darwin';
const isLinux = process.platform === 'linux';

// 获取操作系统
function getOperatingSystem() {
  if (isWindows) return 'windows';
  if (isMacintosh) return 'macintosh';
  if (isLinux) return 'linux';
  return 'unknown';
}

// 获取命令行用户参数
function getUserArgv() {
  // ? 为什么要从第三个参数开始截取
  // ? process.argv(命令行参数) 的第一个参数是 node.exe 地址, 第二个参数是 bin 文件地址, 从第三个参数开始才是用户输入的参数
  return process.argv.slice(2);
}

// 获取 node.js 版本号
function getNodeVersion() {
  return process.version;
}

module.exports = {
  isWindows,
  isMacintosh,
  isLinux,
  getOperatingSystem,
  getUserArgv,
  getNodeVersion,
};
