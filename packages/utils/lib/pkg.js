/*
 * @Author: 一尾流莺
 * @Description:获取项目里的 package.json 文件的内容
 * @Date: 2022-12-12 10:41:18
 * @LastEditTime: 2022-12-14 16:10:41
 * @FilePath: \warbler-cli\packages\utils\lib\pkg.js
 */

'use strict';

const fs = require('fs');
const path = require('path');
const readPkg = require('read-pkg');

// 获取任意目录下的 package.json 文件
const resolvePkg = (context = process.cwd()) => {
  if (fs.existsSync(path.join(context, 'package.json'))) {
    return readPkg.sync({ cwd: context });
  }
  return {};
};

// 执行目录下的 package.json 文件
const pkg = resolvePkg();

module.exports = {
  resolvePkg,
  pkg,
};
