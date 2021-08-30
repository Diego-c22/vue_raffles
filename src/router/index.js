import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/sorteo/:id',
    name: 'RaffleDetail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RaffleDetail.vue')
  },
  {
    path: '/administrador',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
    children: [
      {
        path: 'sorteos',
        component: () => import(/* webpackChunkName: "about" */ '../components/AdminRaffle.vue')
      }
      /*
        {
          path: 'boletos',
          component: () => import( '../components/AdminTicket.vue')
        },
        {
          path: 'ganadores',
          component: () => import( '../components/AdminWinners.vue')
        }
      */
    ],
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/iniciar-sesion',
    name: 'LogIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LogIn.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.getters.getToken) {
    next({ name: 'LogIn', query: { to: to.name } })
  } else {
    next()
  }
})

export default router
