import { createRouter, createWebHistory } from '@ionic/vue-router';

import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Msg from '../views/Msg.vue'
import BookPage from '../views/BookPage.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/msg',
    name: 'Msg',
    component: Msg
  },
  {
    path: '/book/:id',
    name: 'BookPage',
    component: BookPage
  },
  
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
