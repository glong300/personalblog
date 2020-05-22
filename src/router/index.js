import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '标签归类'
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
  {
    path: '/labels',
    name: 'Labels',
    component: () => import('../views/Labels.vue'),
    meta: {
      title: '标签归档'
    }
  },
  {
    path: '/classification',
    name: 'Classification',
    component: () => import('../views/Classification.vue'),
    meta: {
      title: '分类归档'
    }
  },
  {
    path: '/mybooklist',
    name: 'MyBookList',
    component: () => import('../views/MyBookList.vue'),
    meta: {
      title: '我的书单'
    }
  }
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