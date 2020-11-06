import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
]

const router = new VueRouter({
  routes,
  // mode: 'history'
})

router.beforeEach((to, from, next) => {
  // 设置网页标题title
  document.title = to.meta.title
  next()
})

export default router
