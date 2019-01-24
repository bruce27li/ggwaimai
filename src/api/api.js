import {
    post,
    get
  } from './http'
  
  export default {
    // 1、根据经纬度获取位置详情
    reqAddress:(params) => {
      return get(`/api/position/${params}`)
    },
    // 2、获取食品分类列表
    reqFoodCategorys:() => {
      return get('/api/index_category')
    },
    // 3、根据经纬度获取商铺列表
    reqShops:(params) => {
      return get('/api/shops', params)
    },
    //获取用户列表
    getUserList:(params) => {
      return get('api/userlist',params)
    },
    //获取聊天信息列表
    getChatMsgList:(params) => {
      return get('api/msglist',params)
    },
  }
  