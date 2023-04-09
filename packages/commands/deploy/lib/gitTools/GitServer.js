class GitServer {
  constructor(server) {
    this.server = server;
    this.token = null;
  }

  // 设置 token
  async setToken(token) {
    this.token = token;
  }

  // 创建远程仓库
  async createRepo() {
    //
  }

  // 创建组织仓库
  async createOrgRepo() {
    //
  }

  // 获取远程仓库
  async getRemote() {
    //
  }

  // 获取用户信息
  async getUser() {
    //
  }

  getRepo() {
    //
  }

  // 获取组织信息
  async getOrg() {
    //
  }
}

module.exports = GitServer;
