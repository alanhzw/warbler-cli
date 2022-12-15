/*
 * @Author: 一尾流莺
 * @Description:一些通用方法
 * @Date: 2022-12-12 10:41:18
 * @LastEditTime: 2022-12-15 11:24:47
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

module.exports = {
  isObject,
  isString,
  isArray,
};
