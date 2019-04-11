import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About.vue'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import History from './components/about/History'
import Delivery from './components/about/Delivery'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import PersonName from './components/about/contact/PersonName'
import Phone from './components/about/contact/Phone'

export const routes = [
    {path:'/', name:'homeLink',component:Home
    // components:{
    //   default: Home
    //   // 'orderingGuide': OrderingGuide,
    //   // 'delivery':Delivery
    // }
  },
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/admin',name:'adminLink',component:Admin
  },
    {path:'/about',name:'aboutLink',redirect:'/about/contact',component:About,children:[
      {path: '/about/contact',name:'contactLink',redirect:'/personName',component:Contact,children:[
      {path:'/personName',name:'personNameLink',component:PersonName},
      {path:'/phone',name:'phoneLink',component:Phone}
    ]},
      {path:'/history',name:'historyLink',component:History},
      {path:'/delivery',name:'deliveryLink',component:Delivery},
      {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
    ]},
    {path:'/login',name:'loginLink',component:Login},
    {path:'/register',name:'registerLink',component:Register},
    {path:'*',redirect:'/'},
]