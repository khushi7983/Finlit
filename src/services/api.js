import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: async (email, password) => {
    console.log(' Sending login data:', { email, password });
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  
  register: async (email, password) => {
    console.log(' Sending register data:', { email, password });
    const response = await api.post('/auth/register', { email, password });
    return response.data;
  },
};

export default api;
