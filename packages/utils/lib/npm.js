/*
 * @Author: 一尾流莺
 * @Description:与 npm API 相关的操作
 * @Date: 2022-12-12 10:41:18
 * @LastEditTime: 2023-02-07 16:04:41
 * @FilePath: \warbler-cli\packages\utils\lib\npm.js
 */

'use strict';

const axios = require('axios');
const urlJoin = require('url-join');
const semver = require('semver');

// 默认的 npm 源
const DEFAULT_REGISTRY = 'https://registry.npmjs.org/';

/**
 * @description: 获取 npm 模块的信息
 * @param {*} npmName npm 模块名称
 * @param {*} registry npm 镜像地址
 * @return {*} 从 npm 上获取的仓库全部信息
 */
async function getNpmInfo(npmName, registry = DEFAULT_REGISTRY) {
  // 如果 npmName 不存在直接返回
  if (!npmName) {
    return null;
  }
  // 获取镜像地址 ,如果没有传递参数则默认使用 npm 源
  const registryUrl = registry;
  // 拼接 url
  const targetUrl = urlJoin(registryUrl, npmName);
  // 调用 npm API 获取数据
  return axios
    .get(targetUrl)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      }
      return null;
    })
    .catch((e) => Promise.reject(new Error(`获取仓库信息失败 ${e.message}`)));
}

/**
 * @description: 获取模块版本号数组
 * @param {*} npmName npm 模块名称
 * @param {*} registry npm 镜像地址
 * @return {*} 模块的所有版本号组成的数组
 */
async function getNpmVersions(npmName, registry = DEFAULT_REGISTRY) {
  const data = await getNpmInfo(npmName, registry);
  if (data) {
    return Object.keys(data.versions);
  }
  return [];
}

/**
 * @description: 获取符合条件的版本号(大于指定版本的版本号)
 * @param {*} baseVersion  指定版本
 * @param {*} versions 版本号数组
 * @return {*} 大于当前版本的版本号数组
 */
function getNpmSemverVersions(baseVersion, versions) {
  if (!versions || versions.length === 0) {
    return [];
  }
  return versions.filter((version) => semver.satisfies(version, `>${baseVersion}`));
}

/**
 * @description:从 npm 获取符合条件的版本号(大于当前版本的最新版本号)
 * @param {*} baseVersion  指定版本
 * @param {*} npmName npm 模块名称
 * @param {*} registry npm 镜像地址
 * @return {*} 最新版本号
 */
async function getNpmLatestVersion(baseVersion, npmName, registry = DEFAULT_REGISTRY) {
  const versions = await getNpmVersions(npmName, registry);
  const newVersions = getNpmSemverVersions(baseVersion, versions);
  return semver.maxSatisfying(newVersions, `>${baseVersion}`);
}

/**
 * @description: 获取模块最新版本
 * @param {*} npmName npm 模块名称
 * @param {*} registry npm 镜像地址
 * @return {*} 最新版本号
 */
async function getLatestVersion(npmName, registry = DEFAULT_REGISTRY) {
  const versions = await getNpmVersions(npmName, registry);
  if (versions) {
    const sortVersions = versions.sort((a, b) => semver.gt(b, a));
    return sortVersions.at(-1);
  }
  return null;
}

module.exports = {
  getNpmInfo,
  getNpmVersions,
  getNpmLatestVersion,
  getLatestVersion,
  DEFAULT_REGISTRY,
};
