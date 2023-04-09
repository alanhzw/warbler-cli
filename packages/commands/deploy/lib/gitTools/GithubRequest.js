const axios = require('axios');
const https = require('https');

// 防止报错
const agent = new https.Agent({
  rejectUnauthorized: false,
});

const BASE_URL = 'https://api.github.com';

class GithubRequest {
  constructor(token) {
    this.token = token;
    this.service = axios.create({
      baseURL: BASE_URL,
      timeout: 5000,
    });
    this.service.interceptors.request.use(
      (config) => {
        const _config = config;
        _config.httpsAgent = agent;
        _config.headers.Authorization = `token ${this.token}`;
        return _config;
      },
      (error) => Promise.reject(error),
    );
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
      params,
      methods: 'get',
      headers,
    });
  }

  post(url, data, headers) {
    return this.service({
      url,
      data,
      method: 'post',
      headers: {
        Accept: 'application/vnd.github+json',
        ...headers,
      },
    });
  }
}

module.exports = GithubRequest;
