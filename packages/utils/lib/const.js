/*
 * @Author: 一尾流莺
 * @Description: 一些常量
 * @Date: 2022-03-04 11:10:26
 * @LastEditTime: 2023-02-07 16:09:56
 * @FilePath: \warbler-cli\packages\utils\lib\const.js
 */

'use strict';

// 脚手架名称
const CLI_NAME = 'warbler-cli';
// 脚手架 npm 模块名称
// const CLI_PACKAGE_NAME = '@warbler-fe/cli';
const CLI_PACKAGE_NAME = 'vue';
// 脚手架最低 node 版本
const LOWEST_NODE_VERSION = '14.18.0';
// 默认缓存目录
const DEFAULT_CLI_CACHE_DIR = '.warbler-cli';

// npm 镜像列表
const REGISTRY_MAP = {
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
  REGISTRY_MAP,
  CLI_NAME,
  CLI_PACKAGE_NAME,
};
