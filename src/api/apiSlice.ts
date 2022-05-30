import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Group } from '../models/group';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kisi.io',
    prepareHeaders: (headers) => {
      const token = process.env.REACT_APP_TOKEN;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getGroups: builder.query<Group[], void>({
      query: () => '/groups'
    })
  })
});

export const { useGetGroupsQuery } = apiSlice;
