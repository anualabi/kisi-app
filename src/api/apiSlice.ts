import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Group } from '../models/group';
import { GroupLock } from '../models/grouplock';

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
    }),
    getGroupLocks: builder.query<GroupLock[], string>({
      query: (groupId) => `/group_locks?group_id=${groupId}`
    })
  })
});

export const { useGetGroupsQuery, useGetGroupLocksQuery } = apiSlice;
