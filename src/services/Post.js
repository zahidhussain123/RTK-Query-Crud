import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    getPostById: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),

    getPostLimits: builder.query({
      query: (num) => ({
        url: `posts?_limit=${num}`,
        method: "GET",
      }),
    }),

    deletePost: builder.mutation({
      query: (id) => {
        console.log("id is", id);
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),

    createPost: builder.mutation({
      query: (newPost) => {
        console.log("Post creation", newPost);
        return {
          url: "posts",
          method: "POST",
          body: newPost,
        };
      },
    }),

    updatePost: builder.mutation({
      query: (updatePost) => {
        console.log("update post", updatePost);
        const { id, ...data } = updatePost;
        console.log("actual post", data);
        return {
          url: `posts/${id}`,
          method: "PUT",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostLimitsQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
