/*
 * @Author: 一尾流莺
 * @Description:一些通用方法
 * @Date: 2022-12-12 10:41:18
 * @LastEditTime: 2023-01-05 18:54:14
 * @FilePath: \warbler-cli\packages\utils\lib\common.js
 */

'use strict';

// 获取变量的数据类型
const getPrototype = (item) => Object.prototype.toString.call(item).split(' ')[1].replace(']', '');

// 判断是否是对象类型
const isObject = (item) => getPrototype(item) === 'Object';

// 判断是否是字符串类型
const isString = (item) => getPrototype(item) === 'String';

// 判断是否是数组类型
const isArray = (item) => getPrototype(item) === 'Array';

// 终止程序执行1s, 默认让程序睡一秒
function sleep(timeout = 1000) {
  return new Promise((resolve) => {
    const timeoutHandle = setTimeout(() => {
      clearTimeout(timeoutHandle);
      resolve();
    }, timeout);
  });
}

module.exports = {
  isObject,
  isString,
  isArray,
  sleep,
};
