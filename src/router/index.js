import { createRouter, createWebHistory } from 'vue-router'
import App from "@/App.vue";
import Home from "@/views/public/Home.vue";
import Cocktail from "@/views/public/Cocktail.vue";
import Contact from "@/views/public/Contact.vue";
import Notfound from "@/views/public/Notfound.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cocktails',
    name: 'cocktails',
    component: Cocktail
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Notfound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
