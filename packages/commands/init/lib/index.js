'use strict';

const Command = require('@warbler-fe/cli-command');
const { debugLog, warnLog, writeGlobalConfig, errorLog } = require('@warbler-fe/cli-utils');
const { fse, spinnerStart, sleep } = require('@warbler-fe/cli-utils');
const path = require('path');
const Package = require('@warbler-fe/cli-package');
const { getProjectInfo, isValidateName } = require('./methods/inquirer');
const { DEFAULT_TEMPLATE_LIST } = require('./template/template');

// init 命令
class InitCommand extends Command {
  // 一些初始化工作
  async init() {
    // 获取用户参数: 是否强制创建 (用户是否输入了 -f 或者 --force)
    this.projectName = this.options.projectName;
    if (!isValidateName(this.projectName)) {
      throw new Error('project-name 参数要求以英文字母开头,数字或字母结尾,字符只允许使用 - 以及 _');
    }
    // 初始化模板列表
    await this.initTemplateList();
  }

  // 命令执行函数 准备阶段 -> 模板下载 -> 模板安装
  async exec() {
    const { projectName, templateName } = await getProjectInfo(this.config, this.projectName);
    debugLog(`项目名称: ${projectName}`);
    debugLog(`模板名称: ${templateName}`);
    // 把项目名称和模板名称存起来
    this.projectName = projectName;
    this.templateName = templateName;
    // 创建一个 Package
    this.templateNpm = new Package({
      packageName: this.templateName,
      packageVersion: 'latest',
    });
    // 下载模板
    await this.downloadTemplate();
    // 安装模板
    await this.installTemplate();
  }

  // 准备阶段
  async prepare() {
    //
  }

  // 模板下载
  async downloadTemplate() {
    // 查看本地是否已经存在 Package
    let isExists = await this.templateNpm.exists();
    // 如果不存在就进行下载
    if (!isExists) {
      warnLog('即将为你下载模板');
      await this.templateNpm.download();
      // 再次查看本地是否已经存在 Package
      isExists = await this.templateNpm.exists();
      if (isExists) {
        warnLog('模板下载成功');
      }
    }
  }

  // 模板安装
  async installTemplate() {
    // 获取当前目录
    const targetPath = path.resolve(process.cwd(), this.projectName);
    debugLog(`目标目录 ${targetPath}`);
    // 获取模板所在目录
    const templateDir = this.templateNpm.getSpecificFilePath();
    debugLog(`模板所在目录 ${templateDir}`);
    const spinner = spinnerStart('模板安装中，请稍候...');
    await sleep();
    // 确保目录存在 不存在会创建
    try {
      fse.ensureDirSync(templateDir);
      fse.ensureDirSync(targetPath);
      // 拷贝模板到目标目录
      fse.copySync(templateDir, targetPath, {
        filter: (src) => {
          // 排除掉 node_modules , 不然会报错
          if (src.slice(-12) === 'node_modules') {
            return false;
          }
          return true;
        },
      });
      spinner.stop(true);
      warnLog('模板安装成功');
    } catch (error) {
      spinner.stop(true);
      warnLog('模板安装失败');
      errorLog(error.message);
      debugLog(error);
    }
  }

  // 初始化模板列表
  async initTemplateList() {
    // 如果没有 templateList 属性, 说明是第一次执行命令, 则向缓存文件 warbler.json 中写入初始模板列表
    if (!this.config.templateList) {
      await writeGlobalConfig({ templateList: DEFAULT_TEMPLATE_LIST });
      this.config.templateList = DEFAULT_TEMPLATE_LIST;
      debugLog('已初始化模板列表');
    }
    // 如果有 templateList 属性, 但是没有元素, 说明用户把所有的模板都删除了, 此时抛出错误
    if (this.config.templateList?.length === 0) {
      debugLog('模板列表中不存在任何模板信息');
      throw new Error('请至少添加一个模板后再进行项目创建');
    }
  }
}

/**
 * @description: 返回 InitCommand 的实例
 * @param {*} argv : 命令的 options, commander 实例, config
 * @return {*} new InitCommand
 */
function handleInitCommand(argv) {
  return new InitCommand(argv);
}

module.exports = handleInitCommand;
module.exports.InitCommand = InitCommand;
