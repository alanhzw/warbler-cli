'use strict';

const Command = require('@warbler-fe/cli-command');

class DeployCommand extends Command {
  // 一些初始化工作
  async init() {
    //
  }

  // 命令执行函数
  async exec() {
    //
  }
}

/**
 * @description: 返回 DeployCommand 的实例
 * @param {*} argv : 命令的 options, commander 实例, config
 * @return {*} new DeployCommand
 */
function handleDeployCommand(argv) {
  return new DeployCommand(argv);
}

module.exports = handleDeployCommand;
module.exports.InitDeployCommandCommand = DeployCommand;
