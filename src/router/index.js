// 首先先配置整体的路由
// 1.下载路由模块npm i vue-router
// 挂在vue实例上所以要有vue这个模块,这个页面没有这个模块所以要在这个页面导入vue模块
import Vue from 'vue'
// 2.引入路由模块
import VueRouter from 'vue-router'
// 导入login组件
import Login from '../views/login'
// 导入首页/
import Home from '../views/home'
// 3.注册导入Vue对象
Vue.use(VueRouter)
// 4.配置路由规则初始化路由对象
const router = new VueRouter({
  // 配置路由规则
  routes: [
    { name: 'login', path: '/login', component: Login },
    { name: 'home', path: '/', component: Home }
  ]
})
// 5.挂在到vue实例上,要在这里面导出路由给vue实例
export default router
