import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import('../views/Archive/Archive.vue'),
    meta: {
      title: '目录'
    }
  },
  {
    path: '/mybooklist/:id',
    name: 'MyBookList',
    component: () => import('../views/MyBookList/MyBookList.vue'),
    meta: {
      title: '我的书单'
    }
  },
  {
    path: '/about/:id',
    name: 'About',
    component: () => import('../views/About/About.vue'),
    meta: {
      title: '关于我'
    }
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import('../views/MyIcon/MyIcon.vue'),
    meta: {
      title: '图标库'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // 设置网页标题title
  document.title = to.meta.title
  next()
})

export default router