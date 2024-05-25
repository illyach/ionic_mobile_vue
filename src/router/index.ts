import { createRouter, createWebHistory } from '@ionic/vue-router';

import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import Msg from '../views/Msg.vue'
import CustomPage from '../views/CustomPage.vue';
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
    path: '/custom/:id',
    name: 'CustomPage',
    component: CustomPage
  },
  
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
