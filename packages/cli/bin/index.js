#! /usr/bin/env node
/* eslint-disable global-require */

'use strict';

const { warnLog, importLocal } = require('@warbler-fe/cli-utils');

// 如果当前项目中的 node_modules 中存在一个脚手架命令，全局的 node 环境中也存在一个脚手架命令的时候
// import-local 会优先选用项目中 node_modules 的版本
if (importLocal(__filename)) {
  warnLog('正在使用安装在当前项目中的 warbler-cli');
}
// 使用全局下的脚手架命令
else {
  require('../lib')();
}

// 脚手架名称
// npm 模块名称
// 操作系统
// 脚手架所在目录
// 用户主目录
// 缓存目录
// 本地 node.js 版本
// 最低 node.js 版本
// 本地脚手架版本
// 最新脚手架版本
// 脚手架下载量

// 需要一个指定缓存目录的功能
// 需要一个指定 npm 源的功能
// 是否忽略所有提示信息
// 是否忽略版本更新提示
