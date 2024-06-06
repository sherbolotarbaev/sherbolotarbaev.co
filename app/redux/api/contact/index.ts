import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    sendMessage: build.mutation<NewMessageResponse, NewMessageRequest>({
      query: (body) => ({
        url: '/contact',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['contact'],
    }),
  }),
});

export const { useSendMessageMutation } = api;
export default api;
