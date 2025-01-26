import { createRouter, createWebHistory } from 'vue-router'

import * as Public from "@/views/public/index"

import * as Admin from "@/views/admin/index"

const routes = [

  {
    path: "/",
    name: "public",
    component: Public.PublicLayout,
    children: [
      {path: '', name: 'Home', component: Public.Home},
      {path: 'cocktails', name: 'cocktails', component: Public.Cocktail},
      {path: 'contact', name: 'contact', component: Public.Contact},
    ]
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin.AdminLayout,
    children: [
      {path: 'dashboard', name: 'dashboard', component: Admin.Dashboard},
      {path: 'users/index', component: Admin.UserIndex},
      {path: 'users/edit/:id', component: Admin.UserEdit, props: true},
      {path: 'users/add', component: Admin.UserAdd},
      {path: 'cocktails/index', component: Admin.CocktailIndex},
      {path: 'cocktails/edit/:id', component: Admin.CocktailEdit},
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Public.NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
