
import { createRouter, createWebHistory } from 'vue-router'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Dashboard from './pages/Dashboard.vue'
import Home from './pages/Home.vue'
import { useAuthStore } from './stores/auth'
const routes=[{path:'/',component:Home},{path:'/login',component:Login},{path:'/register',component:Register},{path:'/dashboard',component:Dashboard,meta:{requiresAuth:true}}]
const router=createRouter({history:createWebHistory(),routes})
router.beforeEach((to,from,next)=>{ const auth=useAuthStore(); if(to.meta.requiresAuth && !auth.isAuthed) return next('/login'); next(); })
export default router
