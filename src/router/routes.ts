import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/about',
    component: () => import('@/pages/about/index.vue'),
  },
]

export default routes
