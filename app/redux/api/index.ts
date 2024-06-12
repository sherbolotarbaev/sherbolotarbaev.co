import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers) => {
    const xff = document.cookie
      .split(';')
      .map((c) => c.trim())
      .find((c) => c.startsWith('x-forwarded-for='))
      ?.split('=')[1];
    if (xff) headers.set('x-forwarded-for', xff);
    return headers;
  },
  credentials: 'include',
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryExtended,
  refetchOnReconnect: false,
  refetchOnFocus: false,
  tagTypes: ['guestbook', 'contact', 'blog', 'me', 'auth'],
  endpoints: (builder) => ({}),
});
