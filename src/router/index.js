import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: () => import('../layouts/LayoutFull.vue'),
      children: [
    {
      path: '',
      name: 'home',
      component: () => import('../views/HomePage.vue')
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('../views/TesteView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/login",
      name: "login",
      component: () => import('../views/LoginView.vue')
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import('../views/LogoutView.vue')
    },
    {
      path: "/loja",
      name: "loja",
      component: () => import('../views/LojaView.vue')
    },
    {
      path: "/compra",
      name: "compra",
      component: () => import('../views/CompraView.vue')
    }
      ]}
  ]
})

export default router
