import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { // 建立前台路由  1.建立vue檔 2.建立路由 3.加入router-link去改變頁面
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/products',
        name: '產品列表',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/product/:id',
        name: '產品頁面',
        component: () => import('../views/Product.vue')
      },
      {
        path: '/cart',
        name: '購物車',
        component: () => import('../views/Cart.vue')
      }
    ]
  },
  // 後台巢狀路由
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products', // 不用斜線,產品列表
        component: () => import('../views/dashboard/Products.vue')
      },
      {
        path: 'orders', // 訂單列表
        component: () => import('../views/dashboard/Orders.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
