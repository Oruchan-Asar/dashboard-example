import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Album, Photo } from "../interfaces/album.interface";

export const albumsApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  reducerPath: "albumsApi",
  tagTypes: ["Albums", "Photos"],
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => "/albums",
      providesTags: ["Albums"],
    }),
    getAlbumById: builder.query<Album, number>({
      query: (id) => `/albums/${id}`,
      providesTags: ["Albums"],
    }),
    getAlbumPhotos: builder.query<Photo[], number>({
      query: (id) => `/albums/${id}/photos`,
      providesTags: ["Photos"],
    }),
  }),
});

export const {
  useGetAlbumsQuery,
  useGetAlbumByIdQuery,
  useGetAlbumPhotosQuery,
} = albumsApiSlice;
