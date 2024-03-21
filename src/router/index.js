import { createRouter, createWebHistory } from 'vue-router'
import Icon from '../views/Icon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Icon',
      component: Icon
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import('../views/Button.vue')
    },
    {
      path: '/card',
      name: 'Card',
      component: () => import('../views/Card.vue')
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: () => import('../views/Dialog.vue')
    },
    {
      path: '/collapse',
      name: 'Collapse',
      component: () => import('../views/Collapse.vue')
    },
    {
      path: '/pager',
      name: 'Pager',
      component: () => import('../views/Pager.vue')
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: () => import('../views/Tooltip.vue')
    },
    {
      path: '/dropdown',
      name: 'Dropdown',
      component: () => import('../views/Dropdown.vue')
    }
  ],
  linkActiveClass: 'active'
})

export default router
