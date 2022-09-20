import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello.vue'
import About from '../components/About.vue'
import Login from '../view/Login/Login.vue'
import Home from '../view/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/about',
      name:'About',
      component:About,
    },
    {
      path:'/hello',
      name:'Hello',
      component:Hello,
    },
    {
      path:'/home',
      name:'home',
      component:Home,
    }
  ],
  mode:'history'
})
