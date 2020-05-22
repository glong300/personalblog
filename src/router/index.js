import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import('../views/Archive.vue'),
    meta: {
      title: '目录'
    }
  },
  {
    path: '/mybooklist',
    name: 'MyBookList',
    component: () => import('../views/MyBookList.vue'),
    meta: {
      title: '我的书单'
    }
  },
  {
    path: '/about',
    name: 'About',
    // 路由级别代码拆分
    // 这将为此路由生成单独的块（关于[hash].js）
    // 当路线被访问时延迟加载的。
    component: () => import('../views/About.vue'),
    meta: {
      title: '关于我'
    }
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 设置网页标题title
  document.title = to.meta.title
  next()
})

export default router