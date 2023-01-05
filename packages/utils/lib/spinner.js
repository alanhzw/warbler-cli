/*
 * @Author: 一尾流莺
 * @Description:命令行加载效果
 * @Date: 2022-12-12 10:41:18
 * @LastEditTime: 2023-01-05 16:45:37
 * @FilePath: \warbler-cli\packages\utils\lib\spinner.js
 */

'use strict';

const { Spinner } = require('cli-spinner');

const spinnerStart = (message) => {
  const spinner = new Spinner(`${message} %s`);
  spinner.setSpinnerString('⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏');
  spinner.start();
  return spinner;
};

module.exports = {
  spinnerStart,
};
