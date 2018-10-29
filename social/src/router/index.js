import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import Login from '@/pages/login/Login'
import Cadastro from '@/pages/cadastro/Cadastro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
  ]
})
