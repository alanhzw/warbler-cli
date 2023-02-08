/*
 * @Author: 一尾流莺
 * @Description: 一些常量
 * @Date: 2022-03-04 11:10:26
 * @LastEditTime: 2023-02-08 16:00:51
 * @FilePath: \warbler-cli\packages\utils\lib\const.js
 */

'use strict';

// 作者
const CLI_AUTHOR = '一尾流莺';
// 脚手架名称
const CLI_NAME = 'warbler-cli';
// 脚手架 npm 模块名称
// const CLI_PACKAGE_NAME = '@warbler-fe/cli';
const CLI_PACKAGE_NAME = 'vue';
// 脚手架最低 node 版本
const LOWEST_NODE_VERSION = '14.18.0';
// 默认缓存目录
const DEFAULT_CLI_CACHE_DIR = '.warbler-cli';
// 默认配置文件名称
const DEFAULT_CONFIG_NAME = 'warbler.json';
// 默认的 npm 源
const DEFAULT_REGISTRY = 'https://registry.npmjs.org/';
// 默认的包管理工具
const DEFAULT_PACKAGE_MANAGER = 'npm';
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
  CLI_AUTHOR,
  CLI_PACKAGE_NAME,
  DEFAULT_REGISTRY,
  DEFAULT_PACKAGE_MANAGER,
  DEFAULT_CONFIG_NAME,
};
