'use strict';

const Command = require('@warbler-fe/cli-command');
const { fse, emptyDir, debugLog, warnLog } = require('@warbler-fe/cli-utils');
const { isForceInit } = require('./methods/inquirer');

// init 命令
class InitCommand extends Command {
  // 一些初始化工作
  async init() {
    // 获取用户参数: 是否强制创建 (用户是否输入了 -f 或者 --force)
    this.force = this.options.force;
    debugLog(`是否强制创建: ${this.force ? '是' : '否'}`);
    // 获取用户参数: projectName (这个是必填的)
    this.projectName = this.argv.at(0);
    debugLog(`项目名称: ${this.projectName}`);
  }

  // 命令执行函数 准备阶段 -> 模板下载 -> 模板安装
  async exec() {
    //
    await this.prepare();
  }

  // 准备阶段
  async prepare() {
    // 判断当前目录是否为空
    const isDirEmpty = emptyDir.sync(process.cwd());
    // 如果不是空目录
    if (!isDirEmpty) {
      // 如果用户没有输入 -f or --force, 则询问用户是否清空当前目录
      if (!this.force) {
        this.force = await isForceInit();
      }
      // 如果用户选择了清空目录, 或者用户输入了 -f or --force ,则清空当前目录
      if (this.force) {
        // 清空当前目录
        fse.emptyDirSync(process.cwd());
        warnLog('当前目录已清空');
      }
      // 用户选择了不清空, 退出程序, 给出提示
      else {
        warnLog('由于您选择了否, 程序已结束');
      }
    }

    // 判断是否开启强制安装
    // 获取项目的基本信息
  }

  // 模板下载
  async downloadTemplate() {
    //
  }

  // 模板安装
  async installTemplate() {
    //
  }
}

/**
 * @description: 返回 InitCommand 的实例
 * @param {*} argv : projectName 项目名称, 命令的 options, commander 实例, config
 * @return {*} new InitCommand
 */
function handleInitCommand(argv) {
  return new InitCommand(argv);
}

module.exports = handleInitCommand;
module.exports.InitCommand = InitCommand;
