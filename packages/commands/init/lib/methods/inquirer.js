/*
 * @Author: 一尾流莺
 * @Description:命令行交互
 * @Date: 2022-12-09 15:32:59
 * @LastEditTime: 2023-04-14 10:24:59
 * @FilePath: \warbler-cli\packages\commands\init\lib\methods\inquirer.js
 */

'use strict';

const { inquirer } = require('@warbler-fe/cli-utils');

// 询问是否强制创建项目（清空当前文件夹）
async function isForceInit() {
  const forcePrompt = {
    type: 'confirm',
    name: 'isForce',
    message: '当前目录不为空, 是否清空目录并继续创建项目?',
    default: false,
  };
  const { isForce } = await inquirer.prompt([forcePrompt]);
  return isForce;
}

// 询问项目名称和项目模板
async function getProjectInfo(config, name) {
  const namePrompt = {
    type: 'input',
    message: '请输入项目名称',
    name: 'projectName',
    validate: (a) => {
      if (isValidateName(a)) {
        return true;
      }
      return '要求英文字母开头,数字或字母结尾,字符只允许使用 - 以及 _ ';
    },
  };
  const templateNamePrompt = {
    type: 'list',
    message: '请选择项目模板',
    name: 'templateName',
    default: 0,
    choices: config.templateList || [],
  };
  const questions = [];
  if (!name) {
    questions.push(namePrompt);
  }
  questions.push(templateNamePrompt);
  const { projectName, templateName } = await inquirer.prompt(questions);
  return {
    projectName: name || projectName,
    templateName,
  };
}

// 验证项目名称是否符合规范
function isValidateName(a) {
  const reg = /^[a-zA-Z]+([-][a-zA-Z0-9]|[_][a-zA-Z0-9]|[a-zA-Z0-9])*$/;
  return reg.test(a);
}

module.exports = {
  isForceInit,
  getProjectInfo,
  isValidateName,
};
