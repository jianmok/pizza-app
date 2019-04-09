import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'Vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About.vue'
import Login from './components/Login'
import Register from './components/Register'


Vue.use(VueRouter)
const routes = [
    {path:'/',component:Home},
    {path:'/menu',component:Menu},
    {path:'/admin',component:Admin},
    {path:'/about',component:About},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'*',redirect:'/'},

]
const router = new VueRouter({
  routes,
  mode:'history'
})
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
