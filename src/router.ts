import { createWebHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import Game from './pages/Game.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/game/:id', component: Game },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
