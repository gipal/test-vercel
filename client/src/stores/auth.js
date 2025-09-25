/*
 * @Descripttion: your project
 * @Author: zhengzetao
 * @Date: 2025-08-18 11:26:22
 */
import {
  defineStore
} from 'pinia'
import api from '../api/axios'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user') || 'null')
  }),
  getters: {
    isAuthed: s => !!s.token
  },
  actions: {
    async login(email, password) {
      const {
        data
      } = await api.post('/auth/login', {
        email,
        password
      });
      this.token = data.token;
      this.user = data.user;
      localStorage.setItem('token', this.token);
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    async register(payload) {
      await api.post('/auth/register', payload)
    },
    logout() {
      this.token = '';
      this.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user')
    },
    async fetchProfile() {
      const {
        data
      } = await api.get('/user/profile');
      this.user = data.user;
      localStorage.setItem('user', JSON.stringify(this.user))
    }
  }
})