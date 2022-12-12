/*
 * @Author: 一尾流莺
 * @Description:与 npm API 相关的操作
 * @Date: 2022-12-12 10:41:18
 * @LastEditTime: 2022-12-12 21:50:36
 * @FilePath: \warbler-cli\packages\utils\lib\npm.js
 */

'use strict';

const axios = require('axios');
const urlJoin = require('url-join');
const semver = require('semver');

// npm 镜像列表
const REGISTER_MAP = {
  npm: 'https://registry.npmjs.org/',
  yarn: 'https://registry.yarnpkg.com/',
  tencent: 'https://mirrors.cloud.tencent.com/npm/',
  cnpm: 'https://r.cnpmjs.org/',
  taobao: 'https://registry.npmmirror.com/',
  npmMirror: 'https://skimdb.npmjs.com/registry/',
  ysgroup: 'http://62.234.217.203:52528/repository/ys-group/',
};

/**
 * @description: 获取 npm 模块的信息
 * @param {*} npmName npm 模块名称
 * @param {*} register npm 镜像地址
 * @return {*}
 */
async function getNpmInfo(npmName, register = 'npm') {
  // 如果 npmName 不存在直接返回
  if (!npmName) {
    return null;
  }
  // 获取镜像地址 ,如果没有传递参数则默认使用 npm 源
  const registerUrl = REGISTER_MAP[register];
  // 拼接url
  const npmInfoUrl = urlJoin(registerUrl, npmName);
  // 调用 npm API 获取数据
  return axios
    .get(npmInfoUrl)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
      return null;
    })
    .catch((e) => Promise.reject(e));
}

/**
 * @description: 获取模块版本号数组
 * @param {*} npmName npm 模块名称
 * @param {*} register npm 镜像地址
 * @return {*} 模块的版本号
 */
async function getNpmVersions(npmName, register) {
  const data = await getNpmInfo(npmName, register);
  if (data) {
    return Object.keys(data.versions);
  }
  return [];
}

/**
 * @description: 获取符合条件的版本号(大于当前版本的版本号)
 * @param {*} baseVersion  当前版本
 * @param {*} versions 版本号数组
 * @return {*} 大于当前版本的版本号数组
 */
function getNpmSemverVersions(baseVersion, versions) {
  if (!versions || versions.length === 0) {
    return [];
  }
  return versions
    .filter((version) => semver.satisfies(version, `>=${baseVersion}`))
    .sort((a, b) => semver.gt(b, a));
}

/**
 * @description:从 npm 获取符合条件的版本号(大于当前版本的最新版本号)
 * @param {*} npmName npm 模块名称
 * @param {*} register npm 镜像地址
 * @param {*} baseVersion  当前版本
 * @return {*} 最新版本号
 */
async function getNpmSemverVersion(baseVersion, npmName, register) {
  const versions = await getNpmVersions(npmName, register);
  const newVersions = getNpmSemverVersions(baseVersion, versions);
  return newVersions[0] || null;
}

/**
 * @description: 获取模块最新版本
 * @param {*} npmName npm 模块名称
 * @param {*} register npm 镜像地址
 * @return {*} 最新版本号
 */
async function getLatestVersion(npmName, register) {
  const versions = await getNpmVersions(npmName, register);
  if (versions) {
    const sortVersions = versions.sort((a, b) => semver.gt(b, a));
    return sortVersions[sortVersions.length - 1];
  }
  return null;
}

module.exports = {
  getNpmInfo,
  getNpmVersions,
  getNpmSemverVersion,
  getLatestVersion,
};
