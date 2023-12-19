import axios, { AxiosError } from 'axios';

import { toast } from 'react-hot-toast';
import config from 'config';

export const http = axios.create({ baseURL: config.baseURL });

http.interceptors.response.use(
  response => response,
  error => {
    if (error instanceof AxiosError) toast.error(error.response?.data.message);
    return Promise.reject(error);
  }
);
