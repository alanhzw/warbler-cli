#! /usr/bin/env node

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
