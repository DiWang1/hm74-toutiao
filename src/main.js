import Vue from 'vue'
import App from './App.vue'
// 导入路由index.js
import router from './router'
// 导入axios
import axios from 'axios'
// 导入element-ui这个框架的包
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 把axios挂载在vue的原型上方便调用
Vue.prototype.$http = axios

// 给element-ui挂载在Vue实例上方便以后的每个vue实例用
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
