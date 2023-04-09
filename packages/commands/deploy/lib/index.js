'use strict';

const Command = require('@warbler-fe/cli-command');
const { warnLog } = require('@warbler-fe/cli-utils');
const { resolvePkg, existsPkg } = require('@warbler-fe/cli-utils');
const Git = require('./gitTools/Git');

class DeployCommand extends Command {
  // 一些初始化工作
  async init() {
    //
  }

  // 命令执行函数
  async exec() {
    const startTime = performance.now();
    await this.check();
    const git = new Git(this.config, this.options);
    await git.init();

    const endTime = performance.now();
    warnLog(`本次耗时${endTime - startTime}ms`);
  }

  // 部署前的检查工作
  async check() {
    // 检查是否存在 package.json
    if (!existsPkg()) {
      throw new Error('package.json 文件不存在');
    } else {
      const pkg = resolvePkg();
      const buildCommand = this.config.buildCommand || 'build';
      // 检查是否存在 build 命令(默认是build,也可以是用户配置的命令)
      const { scripts } = pkg;
      if (!scripts[buildCommand]) {
        throw new Error(`${buildCommand} 命令不存在`);
      }
    }
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
