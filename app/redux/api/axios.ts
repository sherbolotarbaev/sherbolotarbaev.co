import { cookies, headers } from 'next/headers';

import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 15000,
});

instance.interceptors.request.use(async (config) => {
  const session = cookies().get('session');
  const xff = `${headers().get('x-forwarded-for')?.split(',')[0]}`;

  if (session) {
    config.headers.cookie = `session=${encodeURIComponent(session.value)}`;
  }

  config.headers['x-forwarded-for'] = xff;

  return config;
});

export default instance;
