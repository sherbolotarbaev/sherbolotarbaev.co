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

    deleteGuestbookMessage: build.mutation<
      DeleteGuestbookMessageResponse,
      DeleteGuestbookMessageRequest
    >({
      query: (id) => ({
        url: `/guestbook/messages/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['guestbook'],
    }),

    updateGuestbookMessage: build.mutation<
      UpdateGuestbookMessageResponse,
      UpdateGuestbookMessageRequest
    >({
      query: (id) => ({
        url: `/guestbook/messages/${id}`,
        method: 'PUT',
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

export const {
  useNewGuestbookMessageMutation,
  useDeleteGuestbookMessageMutation,
  useUpdateGuestbookMessageMutation,
  useGetGuestbookMessagesQuery,
} = api;
export default api;
