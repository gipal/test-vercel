/*
 * @Descripttion: your project
 * @Author: zhengzetao
 * @Date: 2025-08-18 11:26:22
 */
import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import Dashboard from './pages/Dashboard.vue'
import Home from './pages/Home.vue'
import {
  useAuthStore
} from './stores/auth'
const routes = [{
  path: '/',
  component: Home
}, {
  path: '/login',
  component: Login
}, {
  path: '/register',
  component: Register
}, {
  path: '/dashboard',
  component: Dashboard,
  meta: {
    requiresAuth: true
  }
}]
const router = createRouter({
  history: createWebHashHistory(), // 这样可以避免在部署时出现路由问题，因为哈希路由不需要服务器端配置。URL 会变成 /#/dashboard 这样的形式，但能确保在任何服务器上正常工作
  routes
})

// 如果你坚持使用 HTML5 History 模式（URL 中没有 #），你可以：
// 将路由改回 createWebHistory()
// 确保在 Vercel 项目设置中正确配置了 "Root Directory" 为 client
// 确保 vercel.json 文件位于 client 目录下

router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  if (to.meta.requiresAuth && !auth.isAuthed) return next('/login');
  next();
})
export default router