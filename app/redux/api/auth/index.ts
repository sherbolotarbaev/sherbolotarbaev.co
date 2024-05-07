import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    sendOtp: build.mutation<SendOtpResponse, SendOtpRequest>({
      query: (body) => ({
        url: '/send-otp',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['auth'],
    }),
  }),
});

export const { useSendOtpMutation } = api;
export default api;
