/* eslint-disable global-require */

'use strict';

const fs = require('fs');
const path = require('path');

// 获取 lib 所在目录
const modulePath = path.join(__dirname, 'lib');
// 获取 lib 下所有的文件名称
const moduleList = fs.readdirSync(modulePath);

// 对 lib 下所有模块做统一导出
moduleList.forEach((m) => {
  Object.assign(exports, require(`./lib/${m}`));
});

exports.semver = require('semver');
exports.rootCheck = require('root-check');
exports.pathExists = require('path-exists');
exports.dotenv = require('dotenv');
