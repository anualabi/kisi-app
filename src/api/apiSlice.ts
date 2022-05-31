import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Group } from '../types/group';
import { GroupLock } from '../types/grouplock';
import { Lock } from '../types/lock';

type AllResponse = {
  apiResponse: Group[];
  pagination: string | null | undefined;
};

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
  tagTypes: ['GroupLocks'],
  endpoints: (builder) => ({
    getGroups: builder.query<AllResponse, number | void>({
      query: (offset) => `/groups?offset=${offset}`,
      transformResponse(apiResponse: Group[], meta) {
        return { apiResponse, pagination: meta?.response?.headers.get('X-Collection-Range') };
      }
    }),
    getGroupLocks: builder.query<GroupLock[], string>({
      query: (groupId) => `/group_locks?group_id=${groupId}`,
      providesTags: ['GroupLocks']
    }),
    addNewGroupLock: builder.mutation({
      query: (formData) => ({
        url: '/group_locks',
        method: 'POST',
        body: formData
      }),
      invalidatesTags: ['GroupLocks']
    }),
    removeGroupLock: builder.mutation<void, number>({
      query: (lockId) => ({
        url: `/group_locks/${lockId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['GroupLocks']
    }),
    getLocks: builder.query<Lock[], void>({
      query: () => '/locks'
    })
  })
});

export const {
  useGetGroupsQuery,
  useGetGroupLocksQuery,
  useGetLocksQuery,
  useAddNewGroupLockMutation,
  useRemoveGroupLockMutation
} = apiSlice;
