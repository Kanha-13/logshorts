import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: {
    'Content-Type': 'application/json', 
  },
  timeout: 10000,
});

// // request interceptors (for token, etc.)
// axiosInstance.interceptors.request.use(
//   (config) => {  },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// //  handling errors globally
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // log out mechanism handle here
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
