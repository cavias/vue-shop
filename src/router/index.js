import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home/About.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin.vue'),
    children: [
      {
        path: '',
        name: 'admin',
        component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin/Admin.vue'),
      },
      {
        path: 'products',
        name: 'admin_products',
        component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin/product/Products.vue'),
      },
    ],
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import(/* webpackChunkName: "catalog" */ '../views/Catalog.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
