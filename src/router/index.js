/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../views/Login/Login'
import adminsuccess from "../views/AdminSuccess/AdminSuccess"
import usersuccess from "../views/UserSuccess/UserSuccess"

Vue.use(VueRouter)

export default new VueRouter ({
  routes:[
    {
      path: '/login',
      component: login,
    },
    {
      path: '/adminsuccess',
      component: adminsuccess,
    },
    {
      path: '/usersuccess',
      component: usersuccess,
    },
    {
      path: '/',
      redirect:'/login',
    }
  ]
})
