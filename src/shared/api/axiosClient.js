import axios from "axios";
import { message } from "antd";

const BASE_URL = import.meta.env.VITE_API_URL || 'https://language-backend-onoo.onrender.com';

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
axiosClient.interceptors.request.use(
    (config) => {
        // Thêm token ở đây nếu cần, ví dụ: 
        // const token = localStorage.getItem('token');
        // if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * Axios Response Interceptor
 *
 * Catches API responses globally. Normalizes valid data return `response.data`.
 * Handles 4xx and 5xx network errors globally via `antd` toast notifications.
 */
axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        // Xử lý Global Errors
        const errorMessage = error.response?.data?.message || error.message || 'Đã xảy ra lỗi kết nối đến máy chủ!';
        message.error(`Lỗi hệ thống: ${errorMessage}`);

        // Log lỗi để tracking (như Sentry)
        console.error("API Error Response:", error.response);

        return Promise.reject(error);
    }
);

export default axiosClient;
