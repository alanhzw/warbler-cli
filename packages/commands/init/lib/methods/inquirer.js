/*
 * @Author: 一尾流莺
 * @Description:命令行交互
 * @Date: 2022-12-09 15:32:59
 * @LastEditTime: 2022-12-31 19:40:07
 * @FilePath: \warbler-cli\packages\commands\init\lib\methods\inquirer.js
 */

'use strict';

const { inquirer } = require('@warbler-fe/cli-utils');

// const p = [];

// 询问是否强制创建项目（清空当前文件夹）
async function isForceInit() {
  const forcePrompt = {
    type: 'confirm',
    name: 'isForce',
    message: '当前目录不为空, 是否清空目录并继续创建项目?',
    default: false,
  };
  const { isForce } = await inquirer.prompt([forcePrompt]);
  return isForce;
}

module.exports = {
  isForceInit,
};
