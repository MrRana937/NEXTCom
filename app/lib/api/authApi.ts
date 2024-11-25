import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const authApi = {
  register: (data: any) => api.post('/auth/register', data),

  login: (data: any) => api.post('/auth/login', data),

  verifyEmail: (token: string) => api.get(`/auth/verify-email?token=${token}`),
}
