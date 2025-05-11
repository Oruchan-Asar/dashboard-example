import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Comment } from "../interfaces/post.interface";

export const commentsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  reducerPath: "commentsApi",
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => "/comments",
      providesTags: ["Comments"],
    }),
    getCommentById: builder.query<Comment, number>({
      query: (id) => `/comments/${id}`,
      providesTags: ["Comments"],
    }),
  }),
});

export const { useGetCommentsQuery, useGetCommentByIdQuery } = commentsApiSlice;
