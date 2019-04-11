import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'Vue-router'
import {routes} from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history'
})

//全局守卫
// router.beforeEach((to, from, next) => {
//   // alert('还未登录，请先登录');
//   // next();
//   // console.log(to);
//   //判断 stor.gettes.isLogin == false
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert('还未登录，请先登录');
//     next('/login');
//   }
// })

//后置钩子
// router.afterEach((ro, from) => {
//   alert('after each');
// })

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
