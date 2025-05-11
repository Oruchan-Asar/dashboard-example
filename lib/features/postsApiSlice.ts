import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../interfaces/post.interface";

export const postsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  reducerPath: "postsApi",
  tagTypes: ["Posts", "Comments"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    getPostById: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
      providesTags: ["Posts"],
    }),
    getPostComments: builder.query<Comment[], number>({
      query: (id) => `/posts/${id}/comments`,
      providesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostCommentsQuery,
} = postsApiSlice;
