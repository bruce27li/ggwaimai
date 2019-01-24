import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import {
  MessageBox
} from 'mint-ui'
axios.defaults.timeout = 5000
axios.defaults.baseURL = ''
// 允许携带cookie
// axios.defaults.withCredentials=true
// 配置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
//http request 拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    MessageBox('错误', '请求超时');
    return Promise.reject(error);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  (response) => {
    //数据统一校验处理    
    if (response.data.code != 0) {
      MessageBox('错误', response.data.msg);
    }
    return response;
  },
  (error) => {
    console.log(error)
    //数据异常统一处理
    if (error.response.status === 504 || error.response.status === 404) {
      MessageBox('错误', '服务器被吃了');

    } else if (error.response.status === 403) {
      MessageBox('错误', '权限不足,请联系管理员');
    } else {
      MessageBox('错误', '未知错误');

    }
    return Promise.reject(error)
  }
)




/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, error => {
        reject(error)
      })
  })
}
