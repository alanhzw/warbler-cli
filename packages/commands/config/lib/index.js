'use strict';

const { homedir } = require('os');
const path = require('path');
const Command = require('@warbler-fe/cli-command');
const { bold, LOWEST_NODE_VERSION, getNodeVersion } = require('@warbler-fe/cli-utils');
const { writeGlobalConfig, getOperatingSystem } = require('@warbler-fe/cli-utils');
const { CLI_NAME, CLI_PACKAGE_NAME } = require('@warbler-fe/cli-utils');
const { getNpmLatestVersion, resolvePkg } = require('@warbler-fe/cli-utils');

class ConfigCommand extends Command {
  // 一些初始化工作
  async init() {
    // 把用户输入的参数拷贝到 this 上
    Object.keys(this.options).forEach((key) => {
      this[key] = this.options[key];
    });
  }

  // 命令执行函数
  async exec() {
    if (this.show) this.handleShow();
    if (this.info) this.handleInfo();
    if (this.setRegistry) this.handleSetRegistry();
    if (this.setCacheDir) this.handleSetCacheDir();
    if (this.setPackageManager) this.handleSetPackageManager();
    if (this.setShowUpdate) this.handleSetShowUpdate();
  }

  // 查看脚手架的配置
  async handleShow() {
    console.log(this.config);
  }

  // 查看脚手架的信息
  async handleInfo() {
    console.log();
    // 脚手架名称
    console.log(bold(`脚手架名称: ${CLI_NAME}`));
    // npm 模块名称
    console.log(bold(`npm 模块名称: ${CLI_PACKAGE_NAME}`));
    // 当前操作系统
    console.log(bold(`当前操作系统: ${getOperatingSystem()}`));
    // 脚手架所在目录
    console.log(bold(`脚手架所在目录: ${__dirname}`));
    // 用户主目录
    console.log(bold(`用户主目录: ${homedir()}`));
    // 缓存目录
    console.log(bold(`缓存目录: ${process.env.CLI_CACHE_DIR}`));
    // 最低 node.js 版本
    console.log(bold(`最低 node.js 版本: ${LOWEST_NODE_VERSION}`));
    // 本地 node.js 版本
    console.log(bold(`本地 node.js 版本: ${getNodeVersion()}`));
    // 读取 package.json 文件
    const pkg = resolvePkg(path.join(__dirname, '../'));
    // 本地脚手架版本
    console.log(bold(`本地脚手架版本: ${pkg.version}`));
    // 调用 npm API , 获取最新版本号
    const latestVersion = await getNpmLatestVersion(
      pkg.version,
      CLI_PACKAGE_NAME,
      process.env.NPM_REGISTRY,
    );
    // 最新脚手架版本
    console.log(bold(`最新脚手架版本: ${latestVersion}`));
    // 脚手架下载量
    console.log(bold('脚手架下载量: 未知'));
    console.log();
  }

  // 指定 npm 源地址
  async handleSetRegistry() {
    writeGlobalConfig({ registry: this.setRegistry });
  }

  // 指定缓存目录地址
  async handleSetCacheDir() {
    writeGlobalConfig({ cacheDir: this.setCacheDir });
  }

  // 指定包管理工具
  async handleSetPackageManager() {
    writeGlobalConfig({ packageManager: this.setPackageManager });
  }

  // 是否提示版本更新
  async handleSetShowUpdate() {
    writeGlobalConfig({ isShowUpdate: this.setShowUpdate });
  }
}

/**
 * @description: 返回 ConfigCommand 的实例
 * @param {*} argv : 命令的 options, commander 实例, config
 * @return {*} new ConfigCommand
 */
function handleConfigCommand(argv) {
  return new ConfigCommand(argv);
}

module.exports = handleConfigCommand;
module.exports.InitConfigCommandCommand = ConfigCommand;
