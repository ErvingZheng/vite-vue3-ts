import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layouts from '../layouts/index.vue'

// 文件后缀名必须加上,否则vite会报错
const routes: RouteRecordRaw[] = [
  { path: '/login', component: () => import('../views/login/index.vue') },
  { path: '/404', component: () => import('../views/errorPages/notFound.vue') },
  {
    path: '/',
    redirect: '/login',
    component: Layouts,
    children: [
      {
        path: 'dashboard',
        component: () => import('../views/dashboard/index.vue'),
      },
      {
        path: 'icon',
        component: () => import('../views/icon/index.vue'),
      },
    ],
  },

  // vue-router4.0无法使用'*'匹配404，需要自定一个参数，并使用正则
  // 末尾的'*'在使用route的name参数跳转时是必须的
  { path: '/:pathMatch(.*)*', redirect: '/404' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
