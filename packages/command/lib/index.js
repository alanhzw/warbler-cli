'use strict';

const { errorLog, isArray } = require('@warbler-fe/cli-utils');
// Command 类, 命令的基类
class Command {
  constructor(argv) {
    if (!argv) {
      throw new Error('参数不可以为空!');
    }
    if (!isArray(argv)) {
      throw new Error('参数必须是数组类型!');
    }
    if (argv.length < 1) {
      throw new Error('参数列表不可以为空!');
    }
    this.argv = argv;
    // 获取全局配置
    this.config = argv.at(-1) || {};
    // 获取命令对象
    this.command = argv.at(-2) || {};
    // 获取选项参数
    this.options = argv.at(-3) || {};
    new Promise(() => {
      let chain = Promise.resolve();
      chain = chain.then(() => this.init());
      chain = chain.then(() => this.exec());
      chain = chain.then(() => this.final());
      chain.catch((error) => errorLog(error.message));
    });
  }

  // 命令初始化阶段
  init() {}

  // 命令执行阶段
  exec() {}

  // 命令执行结束
  final() {}
}

module.exports = Command;
