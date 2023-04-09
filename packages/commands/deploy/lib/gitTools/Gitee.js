const GitServer = require('./GitServer');
const GiteeRequest = require('./GiteeRequest');

// https://gitee.com/api/v5/swagge
class Gitee extends GitServer {
  constructor() {
    super('gitee');
    this.request = null;
  }

  // 设置 token
  async setToken(token) {
    super.setToken(token);
    this.request = new GiteeRequest(token);
  }

  // 创建远程仓库
  async createRepo(name) {
    const result = await this.request.post('/user/repos', {
      name,
    });
    return result;
  }

  // 创建组织仓库
  async createOrgRepo(name, login) {
    const result = await this.request.post(`/orgs/${login}/repos`, {
      name,
    });
    return result;
  }

  // 获取远程仓库地址
  async getRemote(login, name) {
    // git@gitee.com:hzw_0174/warbler-js1.git
    return `git@gitee.com:${login}/${name}.git`;
  }

  // 获取远程仓库
  async getRepo(login, name) {
    const result = await this.request.get(`/repos/${login}/${name}`);
    return result;
  }

  // 获取用户信息
  async getUser() {
    const result = await this.request.get('/user');
    return result;
  }

  // 获取组织信息
  async getOrg(username) {
    const result = await this.request.get(`/users/${username}/orgs`, { page: 1, per_page: 100 });
    return result;
  }

  // 获取如何添加 token 的连接
  async getTokenTip() {
    return 'https://gitee.com/profile/personal_access_tokens';
  }
}

module.exports = Gitee;
