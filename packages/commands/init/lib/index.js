'use strict';

const Command = require('@warbler-fe/cli-command');
const { debugLog, warnLog, writeGlobalConfig, errorLog } = require('@warbler-fe/cli-utils');
const { fse, emptyDir, spinnerStart, sleep } = require('@warbler-fe/cli-utils');

const Package = require('@warbler-fe/cli-package');
const { isForceInit, getProjectInfo } = require('./methods/inquirer');
const { DEFAULT_TEMPLATE_LIST } = require('./template/template');

// init 命令
class InitCommand extends Command {
  // 一些初始化工作
  async init() {
    // 获取用户参数: 是否强制创建 (用户是否输入了 -f 或者 --force)
    this.force = this.options.force;
    debugLog(`是否强制创建: ${this.force ? '是' : '否'}`);
    // 初始化模板列表
    await this.initTemplateList();
  }

  // 命令执行函数 准备阶段 -> 模板下载 -> 模板安装
  async exec() {
    // 判断是否通过了准备阶段, 通过了才执行后面的内容
    const prepareFlag = await this.prepare();
    if (prepareFlag) {
      const { projectName, templateName } = await getProjectInfo(this.config);
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
  }

  // 准备阶段
  async prepare() {
    let prepareFlag = true;
    // 判断当前目录是否为空
    const isDirEmpty = await emptyDir(process.cwd());
    // 如果不是空目录
    if (!isDirEmpty) {
      // 如果用户没有输入 -f or --force, 则询问用户是否清空当前目录
      if (!this.force) {
        this.force = await isForceInit();
      }
      // 如果用户选择了清空目录, 或者用户输入了 -f or --force ,则清空当前目录
      if (this.force) {
        // 清空当前目录
        warnLog('正在清空当前目录');
        fse.emptyDirSync(process.cwd());
        warnLog('当前目录已清空');
        prepareFlag = true;
      }
      // 用户选择了不清空, 退出程序, 给出提示
      else {
        warnLog('由于你选择了否, 程序已结束');
        prepareFlag = false;
      }
    }
    return prepareFlag;
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
    const targetPath = process.cwd();
    debugLog(`当前目录 ${targetPath}`);
    // 获取模板所在目录
    const templateDir = this.templateNpm.getSpecificFilePath();
    debugLog(`模板所在目录 ${templateDir}`);
    const spinner = spinnerStart('模板安装中，请稍候...');
    await sleep();
    // 确保目录存在 不存在会创建
    try {
      fse.ensureDirSync(templateDir);
      fse.ensureDirSync(targetPath);
      // 拷贝模板到当前目录
      fse.copySync(templateDir, targetPath);
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
