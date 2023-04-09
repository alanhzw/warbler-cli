const axios = require('axios');

const BASE_URL = 'https://gitee.com/api/v5';

class GiteeRequest {
  constructor(token) {
    this.token = token;
    this.service = axios.create({
      baseURL: BASE_URL,
      timeout: 5000,
    });
    this.service.interceptors.response.use(
      (response) => response.data,
      (error) => {
        if (error?.response?.status === 401) {
          return Promise.reject(new Error('token失效，请重新设置token'));
        }
        return {
          status: error?.response?.status,
          data: error?.response?.data,
          message: error?.response?.data.message,
        };
      },
    );
  }

  get(url, params, headers) {
    return this.service({
      url,
      params: {
        ...params,
        access_token: this.token,
      },
      method: 'get',
      headers,
    });
  }

  post(url, data, headers) {
    return this.service({
      url,
      params: {
        access_token: this.token,
      },
      data,
      method: 'post',
      headers,
    });
  }
}

module.exports = GiteeRequest;
