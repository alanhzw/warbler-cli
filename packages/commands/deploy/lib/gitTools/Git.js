const { simpleGit, terminalLink, fse } = require('@warbler-fe/cli-utils');
const { bold, success } = require('@warbler-fe/cli-utils');
const path = require('path');

const Github = require('./Github');
const Gitee = require('./Gitee');

class Git {
  constructor(config, options) {
    // 获取全局配置
    console.log('🚀🚀 ~ Git ~ this.config:', config);
    this.config = config;
    this.options = options;
    this.git = null;
    this.server = null;
    this.dir = process.cwd();
  }

  async init() {
    // 生成 simpleGit 实例
    this.git = simpleGit(this.dir);
    // 根据用户配置的 server 类型 , 生成对应的 gitServer, 默认是 github, 只能是 github 或者 gitee
    this.server = await this.createGitServer();
    // 检查 token 是否存在
    const token = await this.checkToken();
    this.server.setToken(token);
    // 获取用户/组织信息
    // await this.getUserAndOrgsInfo();
    // await this.createRepo();
    // 初始化本地仓库并和远程仓库绑定
    // await this.initLocalAndAddRemote();
    // 项目初始化提交
    // await this.codeCommit();
  }

  // 根据代码仓库的类型生成对应的 gitServer
  async createGitServer() {
    const { gitOptions } = this.config;
    const server = gitOptions?.server || 'github';
    if (!['github', 'gitee'].includes(server)) {
      throw new Error('不支持的代码仓库，请修改 git.server ，仅支持 github 或者 gitee');
    }
    if (server === 'gitee') return new Gitee();
    return new Github();
  }

  // 检查用户是否传入了 token 参数
  async checkToken() {
    const { gitOptions } = this.config;
    const token = gitOptions?.token;
    if (!token) {
      const errorMessage = `token不存在，请添加token，${terminalLink(
        '如何获取token',
        `👉${bold(success(await this.server.getTokenTip()))}`,
      )}`;
      throw new Error(errorMessage);
    }
    return token;
  }

  // 获取用户或组织信息
  async getUserAndOrgsInfo() {
    this.user = await this.server.getUser();
    this.org = await this.server.getOrg(this.user.login);
  }

  // 创建仓库
  async createRepo() {
    // 获取仓库信息
    const result = await this.server.getRepo('hzw_0174', 'warbler-js1');
    const { gitOptions } = this.config;
    // 404 就是没有仓库
    if (result.status === 404) {
      // 如果是个人就创建个人仓库
      if (gitOptions.owner === 'user') {
        this.server.createRepo('warbler-js1');
      }
      // 否则创建组织仓库
      else if (gitOptions.owner === 'org') {
        this.server.createOrgRepo('warbler-js1');
      }
    }
  }

  // 初始化本地仓库并和远程仓库绑定
  async initLocalAndAddRemote() {
    // 本地仓库初始化
    if (!fse.existsSync(path.resolve(this.dir, '.git'))) {
      await this.git.init(this.dir);
    }
    // 绑定远程仓库
    const remotes = await this.git.getRemotes();
    // 查看是否已经绑定远程
    const isOrigin = remotes.find((remote) => remote.name === 'origin');
    if (!isOrigin) {
      await this.git.addRemote('origin', await this.server.getRemote('hzw_0174', 'warbler-js1'));
    }
  }

  // 初始化代码提交
  async codeCommit() {
    // 检查代码是否冲突
    const status = await this.git.status();
    if (status.conflicted.length > 0) {
      throw new Error('代码存在冲突，请手动解决后再试');
    }
    // add
    await this.git.add(status.not_added);
    await this.git.add(status.created);
    await this.git.add(status.modified);
    await this.git.add(status.renamed);
    // commit
    await this.git.commit('commit message');
    // 查看是否存在master分支
    const listRemote = await this.git.listRemote(['--refs']);
    const hasMaster = listRemote.indexOf('refs/heads/master') >= 0;
    if (!hasMaster) {
      // 没有master分支推送到master分支
      await this.git.push('origin', 'master');
    } else {
      // 有master分支 拉取分支代码
      await this.git.pull('origin', 'master', {
        '--allow-unrelated-histories': null,
      });
    }
  }

  async commit() {
    // 生成开发分支
    // 在开发分支上提交代码
    // 合并远程开发分支
    // 推送开发分支
  }
}

module.exports = Git;
