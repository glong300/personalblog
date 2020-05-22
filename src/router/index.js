import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/about',
  name: 'About',
  // 路由级别代码拆分
  // 这将为此路由生成单独的块（关于[hash].js）
  // 当路线被访问时延迟加载的。
  component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
}, {
  path: '/labels',
  name: 'Labels',
  component: () => import( /* webpackChunkName: "labels" */ '../views/Labels.vue')
}, {
  path: '/classification',
  name: 'Classification',
  component: () => import( /* webpackChunkName: "classification" */ '../views/Classification.vue')
},{
  path: '/mybooklist',
  name: 'MyBookList',
  component: () => import( /* webpackChunkName: "classification" */ '../views/MyBookList.vue')
}]

const router = new VueRouter({
  routes
})

export default router