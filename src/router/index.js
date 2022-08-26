import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/SkillsView.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/ProjectsView')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
