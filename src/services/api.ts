import axios from 'axios';

/* To create instance with URL base from .env */ 
const api = axios.create({
	/* Base URL from environment variable or default to localhost */
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
    timeout: 5000,
});

// Interceptor: Adds JWT Token automatically to each request
api.interceptors.request.use((config) => {
	/* Get token from localStorage (or any other storage) */
    const token = localStorage.getItem('token');
	/* If token exists, add it to headers */
    if (token) {
		/* Set Authorization header */
        config.headers.Authorization = `Bearer ${token}`;
    }
	/* Return modified config */
    return config;
});

export default api;