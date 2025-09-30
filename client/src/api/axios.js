import axios from 'axios'
const api = axios.create({
  // baseURL: 'https://api.yude.baby/api',
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:4001/api',
  timeout: 20000
})
api.interceptors.request.use(cfg => {
  const t = localStorage.getItem('token');
  if (t) cfg.headers.Authorization = `Bearer ${t}`;
  return cfg
})

export default api