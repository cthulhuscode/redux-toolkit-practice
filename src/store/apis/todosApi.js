import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    getTodo: builder.query({
      query: (id) => `/todos/${id}`,
    }),
  }),
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi;
