/**
 * GNITO
 * 
 * Author: jcahal
 * Version: 0.0.1
 * 
 * TODO:
 *  Comment files, including header comments
 *  Finish style
 * 
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
