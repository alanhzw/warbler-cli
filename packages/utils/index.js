/* eslint-disable global-require */

'use strict';

const fse = require('fs-extra');
const path = require('path');

// 获取 lib 所在目录
const modulePath = path.join(__dirname, 'lib');
// 获取 lib 下所有的文件名称
const moduleList = fse.readdirSync(modulePath);

// 对 lib 下所有模块做统一导出
moduleList.forEach((m) => {
  Object.assign(exports, require(`./lib/${m}`));
});

exports.semver = require('semver');
exports.rootCheck = require('root-check');
exports.importLocal = require('import-local');
exports.minimist = require('minimist');
exports.npminstall = require('npminstall');
exports.emptyDir = require('empty-dir');
exports.inquirer = require('inquirer');

exports.fse = fse;
