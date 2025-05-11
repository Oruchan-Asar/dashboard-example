import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../interfaces/user.interface";
import { Post } from "../interfaces/post.interface";
import { Album } from "../interfaces/album.interface";
import { Todo } from "../interfaces/todo.interface";

export const usersApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  reducerPath: "usersApi",
  tagTypes: ["Users", "Posts", "Albums", "Todos"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    getUserById: builder.query<User, number>({
      query: (id) => `/users/${id}`,
      providesTags: ["Users"],
    }),
    getUserPosts: builder.query<Post[], number>({
      query: (id) => `/users/${id}/posts`,
      providesTags: ["Posts"],
    }),
    getUserAlbums: builder.query<Album[], number>({
      query: (id) => `/users/${id}/albums`,
      providesTags: ["Albums"],
    }),
    getUserTodos: builder.query<Todo[], number>({
      query: (id) => `/users/${id}/todos`,
      providesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetUserPostsQuery,
  useGetUserAlbumsQuery,
  useGetUserTodosQuery,
} = usersApiSlice;
