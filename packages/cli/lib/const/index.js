/*
 * @Author: 一尾流莺
 * @Description: 一些常量
 * @Date: 2022-03-04 11:10:26
 * @LastEditTime: 2022-12-13 18:17:22
 * @FilePath: \warbler-cli\packages\cli\lib\const\index.js
 */

'use strict';

// 脚手架最低 node 版本
const LOWEST_NODE_VERSION = '14.18.0';
// 缓存目录
const DEFAULT_CLI_CACHE_DIR = '.warbler-cli';

// npm 镜像列表
const REGISTER_MAP = {
  npm: 'https://registry.npmjs.org/',
  yarn: 'https://registry.yarnpkg.com/',
  tencent: 'https://mirrors.cloud.tencent.com/npm/',
  cnpm: 'https://r.cnpmjs.org/',
  taobao: 'https://registry.npmmirror.com/',
  npmMirror: 'https://skimdb.npmjs.com/registry/',
};

module.exports = {
  LOWEST_NODE_VERSION,
  DEFAULT_CLI_CACHE_DIR,
  REGISTER_MAP,
};
