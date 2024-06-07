import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    logInOtp: build.mutation<LogInOtpResponse, LogInOtpRequest>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['auth'],
    }),

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

export const { useLogInOtpMutation, useSendOtpMutation } = api;
export default api;
