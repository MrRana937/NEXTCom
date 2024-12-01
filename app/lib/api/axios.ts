import axios from 'axios'

// Create base axios instance
export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
})
