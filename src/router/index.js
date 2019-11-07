import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/quan'
  },
  {
    path: '/home',
    component: () => import('../views/Home'),
    children: [
      {
        path: '/home/quan',
        component: () => import('../views/home/Quan.vue')
      },
      {
        path: '/home/my',
        component: () => import('../views/home/My.vue'),
        beforeEnter(to, from, next) {
          if (!localStorage.token) {
            next('/login')
          } else {
            next()
          }
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/apeople',
    component: () => import('../views/Apeople.vue')
  },
  {
    path: '/cang',
    component: () => import('../views/Cang.vue')
  },
  {
    path: '/change',
    component: () => import('../views/Change.vue')
  },
  {
    path: '/comment',
    component: () => import('../views/Comment.vue'),
    children: [{
      path: '/comment/shou',
      component: () => import('../views/comment/Shou.vue')
    }, {
      path: '/comment/give',
      component: () => import('../views/comment/Give.vue')
    },
    ]
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/search',
    component: () => import('../views/Search.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
