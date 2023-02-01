'use strict';

const path = require('path');
const { debugLog, errorLog, spinnerStart, sleep } = require('@warbler-fe/cli-utils');
const { isObject, npminstall, getLatestVersion, fse } = require('@warbler-fe/cli-utils');

// Package 类 管理模块
class Package {
  constructor(options) {
    if (!options) {
      throw new Error('Package 类的参数不能为空!');
    }
    if (!isObject(options)) {
      throw new Error('Package 类的参数必须是对象类型!');
    }
    const { packageName, packageVersion } = options;

    // package name
    this.packageName = packageName;
    // package version
    this.packageVersion = packageVersion;
    // cacheDir 缓存根目录
    this.cacheDir = process.env.CLI_CACHE_DIR;
    // cachePackageDir 缓存 packages 的目录
    this.cachePackageDir = path.resolve(this.cacheDir, 'node_modules');
  }

  // 获取对应版本在本地缓存文件中的路径
  // package 在本地的缓存形式: _@warbler-fe_cli@1.0.0@@warbler-fe
  getSpecificFilePath(packageVersion = this.packageVersion) {
    return path.resolve(
      this.cachePackageDir,
      `_${this.packageName.replace('/', '_')}@${packageVersion}@${this.packageName}`,
    );
  }

  // 获取 package 版本号
  // 如果传入了 latest , 则需要转换成版本号, 否则无法在缓存目录进行查找
  // 如果传入了正常的版本号, 则直接取用
  async getNpmVersion() {
    debugLog(`${this.packageName} 的目标版本为: ${this.packageVersion}`);
    // 获取最新版本
    const latestVersion = await getLatestVersion(this.packageName);
    // 如果设定的版本号是最新的话，就赋值
    if (this.packageVersion === 'latest') {
      this.packageVersion = latestVersion;
      debugLog(`${this.packageName} 的最新版本为: ${latestVersion}`);
    }
  }

  // 查询版本是否已经是最新版本
  async isLatestVersionFn() {
    // 获取最新版本号
    const latestVersion = await getLatestVersion(this.packageName);
    // 拼接查询路径
    const targetPath = this.getSpecificFilePath(latestVersion);
    // 判断版本是否存在
    const result = fse.existsSync(targetPath);
    return result;
  }

  // 查询本地缓存目录中是否存在对应版本的 package
  async exists() {
    // 获取版本号
    await this.getNpmVersion();
    // 先拼接出想要查询的 package 的路径
    const cacheTargetPath = this.getSpecificFilePath(this.packageVersion);
    // 查询路径是否存在, 路径存在则版本也存在
    const result = fse.existsSync(cacheTargetPath);
    debugLog(
      `缓存目录中${result ? '存在' : '不存在'} ${this.packageName} 的 ${this.packageVersion} 版本`,
    );
    return result;
  }

  // 下载 package
  async download() {
    await this.getNpmVersion();
    debugLog(`即将下载 ${this.packageName} , 版本为: ${this.packageVersion}`);
    const spinner = spinnerStart('模板下载中，请稍候...');
    await sleep();
    try {
      await npminstall({
        root: this.cacheDir, // 模块路径
        storeDir: this.cachePackageDir, // 模块安装位置
        register: process.env.NPM_REGISTER, // 设置 npm 源
        pkgs: [
          // 要安装的包信息
          {
            name: this.packageName,
            version: this.packageVersion,
          },
        ],
      });
      spinner.stop(true);
      debugLog(` ${this.packageName} 下载完毕 , 版本为: ${this.packageVersion}`);
    } catch (error) {
      spinner.stop(true);
      errorLog(error.message);
    }
  }

  // 更新当前 package
  async update() {
    await this.getNpmVersion();
    // 获取最新版本号
    const latestVersion = await getLatestVersion(this.packageName);
    // 查询版本是否已经是最新版本
    const isLatestVersion = await this.isLatestVersionFn();
    if (isLatestVersion) {
      debugLog(`${this.packageName} 已是最新版本: ${this.packageVersion}`);
    } else {
      debugLog(`即将更新 ${this.packageName} , 更新版本为: ${latestVersion}`);
      const spinner = spinnerStart('模板下载中，请稍候...');
      await sleep();
      try {
        await npminstall({
          root: this.cacheDir, // 模块路径
          storeDir: this.cachePackageDir, // 模块安装位置
          register: process.env.NPM_REGISTER, // 设置 npm 源
          pkgs: [
            // 要安装的包信息
            {
              name: this.packageName,
              version: latestVersion,
            },
          ],
        });
        // 更新当前版本
        this.packageVersion = latestVersion;
        spinner.stop(true);
        debugLog(`${this.packageName} 更新完毕 , 最新版本为: ${latestVersion}`);
      } catch (error) {
        spinner.stop(true);
        errorLog(error.message);
      }
    }
  }
}

module.exports = Package;
