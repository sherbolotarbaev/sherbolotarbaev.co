import { api as index } from '..';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    addView: build.query<AddViewResponse, AddViewRequest>({
      query: (params) => ({
        url: `/views/${params.slug}`,
        method: 'GET',
      }),
      providesTags: ['blog'],
    }),

    getViews: build.query<GetViewsResponse, GetViewsRequest>({
      query: () => ({
        url: '/views',
        method: 'GET',
      }),
      providesTags: ['blog'],
    }),
  }),
});

export const { useAddViewQuery, useGetViewsQuery } = api;
export default api;
