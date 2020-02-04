import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Index.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'
import Shoes from '../views/shoes/Index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/shoes',
    name: 'shoes',
    component: Shoes
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: ResetPassword
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
