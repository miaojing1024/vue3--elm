import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'index', // 解决警告
    component: () => import('.././views/index.vue'),
    children: [
      {
        path: "",
        redirect: "/home"
      },
      {
        path: "/home",
        name: "home",
        component: () => import('.././views/home.vue'),
      },
      {
        path: "/me",
        name: "me",
        component: () => import('.././views/me.vue'),
      },
      {
        path: "/order",
        name: "order",
        component: () => import('.././views/order.vue'),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('.././views/login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false
  if (to.path == '/login') {
    next()
  } else {
    if (isLogin) {
      next()
    } else {
      next("/login")
    }
  }
})
export default router
