'use strict';

const path = require('path');
const commander = require('commander');
const { resolvePkg, errorLog, debugLog } = require('@warbler-fe/cli-utils');
const { warn, error, bold, chalk, success } = require('@warbler-fe/cli-utils');
const initCommand = require('@warbler-fe/cli-command-init');
const configCommand = require('@warbler-fe/cli-command-config');
const deployCommand = require('@warbler-fe/cli-command-deploy');

// 命令注册
async function registerCommand(config) {
  // 创建一个 commander 实例
  const program = new commander.Command();
  // 读取 package.json 文件
  const pkg = resolvePkg(path.join(__dirname, '../', '../'));
  // 获取脚手架执行命令 name
  const name = (pkg.bin && Object.keys(pkg.bin).at(0)) || '';

  // 配置基本信息
  program
    .name(bold(name))
    .usage(bold('<command> [options]'))
    .description(
      bold(
        `CLI of WarblerFE, Welcome to the homepage of warbler! 👉${success(
          'http://warbler.duwanyu.com',
        )}`,
      ),
    )
    .helpOption('-h, --help', '查看帮助文档')
    .version(pkg.version, '-V, --version', '查看脚手架版本')
    .option('-D, --debug', '是否开启调试模式, 可查看调试信息', false)
    .option('--ignore-warning', '是否忽略提示信息, 开启后同样会忽略调试信息', false)
    .configureOutput({
      // 将错误高亮显示
      outputError: (str, write) => write(error(`错误信息: ${str}`)),
    });

  // 注册 init 命令
  program
    .command('init')
    .summary('初始化项目')
    .description(bold(`${success('通过选择模板, 你可以快速的初始化一个项目')}`))
    .option('-f, --force', '是否强制初始化项目(会清空所有文件)', false)
    .option('-i, --install', '是否在创建完成后自动安装依赖', false)
    .option('-s, --serve', '是否在安装依赖后自动启动服务', false)
    .action(async (...argv) => {
      await catchHandler(initCommand.bind(null, [...argv, config]));
    });

  // 注册 config 命令
  program
    .command('config')
    .summary('脚手架配置')
    .description(bold(`${success('对脚手架进行配置, 也可以查看你的配置文件')}`))
    .option('-s, --show', '查看脚手架的配置')
    .option('-i, --info', '查看脚手架的信息')
    .option('-sr, --set-registry <registry>', '指定 npm 源地址')
    .option('-scd, --set-cache-dir <cacheDir>', '指定缓存目录地址')
    .option('-spm, --set-package-manager <packageManager>', '指定包管理工具')
    .option('-ssu, --set-show-update <isShowUpdate>', '是否提示版本更新（boolean，默认true）')
    .action(async (...argv) => {
      await catchHandler(configCommand.bind(null, [...argv, config]));
    });

  // 注册 deploy 命令
  program
    .command('deploy')
    .summary('项目部署')
    .description(bold(`${success('构建并部署你的项目')}`))
    .action(async (...argv) => {
      await catchHandler(deployCommand.bind(null, [...argv, config]));
    });

  // 监听未注册的所有命令
  program.on('command:*', ([cmd]) => {
    program.outputHelp();
    console.log(error(`  不存在命令: ${cmd}`));
    console.log();
  });

  // 重置子命令的帮助信息
  program.commands.forEach((c) => c.on('--help', () => console.log()));
  // 关闭子命令的帮助子命令
  program.addHelpCommand(false);

  // 添加额外的帮助信息
  program.on('--help', () => {
    console.log();
    console.log(
      bold(`  运行 ${chalk.blue('warbler <command> --help')} 来查看某个具体命令的帮助文档`),
    );
    console.log();
  });

  // 出错的时候添加提示
  program.showHelpAfterError(warn('通过添加 --help 来查看帮助文档, 以帮助你避免错误 \n'));

  // 解析参数
  await program.parseAsync(process.argv);

  // 判断是否输入命令 显示帮助文档
  if (program.args && program.args.length < 1) {
    program.outputHelp();
  }
}

// 捕获异步方法中的错误
async function catchHandler(fn) {
  try {
    await fn();
  } catch (e) {
    errorLog(e.message);
    debugLog(e);
  }
}

module.exports = registerCommand;
