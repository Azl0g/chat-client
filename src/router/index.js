import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Chat from '../views/Chat.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: Chat,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    beforeEnter () {
      store.logout()
    }

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth
  })
  if (requiresAuth && !store.$data.isRegistered) {
    next('/login')
  } else {
    next()
  }
})

export default router
