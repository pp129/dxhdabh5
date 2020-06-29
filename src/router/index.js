import Vue from 'vue'
import VueRouter from 'vue-router'
// import list from '@/views/list/index'
Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/list'
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('@/views/list/index'),
    meta: {
      title: 'list'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('@/views/events'),
    children: [
      {
        path: '/baseInfo',
        name: 'baseInfo',
        component: () => import('@/views/events/baseInfo'),
        meta: {
          title: '基本信息'
        }
      },
      {
        path: '/relativeUnit',
        name: 'relativeUnit',
        component: () => import('@/views/events/relativeUnit'),
        meta: {
          title: '相关单位'
        }
      },
      {
        path: '/docs',
        name: 'docs',
        component: () => import('@/views/events/docs'),
        meta: {
          title: '申报材料'
        }
      },
      {
        path: '/docs',
        name: 'docs',
        component: () => import('@/views/events/docs'),
        meta: {
          title: '活动日程'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
