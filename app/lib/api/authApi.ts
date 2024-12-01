import { api } from './axios'

export const authApi = {
  register: (data: any) => api.post('/auth/register', data),

  login: (data: any) => api.post('/auth/login', data),

  verifyEmail: (token: string) => api.get(`/auth/verify-email?token=${token}`),
}
