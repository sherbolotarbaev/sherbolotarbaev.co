import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    newGuestbookMessage: build.mutation<
      NewGuestbookMessageResponse,
      NewGuestbookMessageRequest
    >({
      query: (body) => ({
        url: '/guestbook/messages',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['guestbook'],
    }),

    getGuestbookMessages: build.query<
      GetGuestbookMessagesResponse,
      GetGuestbookMessagesRequest
    >({
      query: (queryParams) => ({
        url: '/guestbook/messages',
        method: 'GET',
        params: queryParams,
      }),
      providesTags: ['guestbook'],
    }),
  }),
});

export const { useNewGuestbookMessageMutation, useGetGuestbookMessagesQuery } = api;
export default api;
