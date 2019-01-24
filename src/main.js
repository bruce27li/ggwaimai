/**
 * 入口js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Api from './api/api'


Vue.prototype.$http = Api
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
