"use client";

import { useGetPostsQuery } from "@/lib/features/postsApiSlice";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";
export default function PostsPage() {
  const { data: allPosts } = useGetPostsQuery();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Posts</h1>
      <DataTable columns={columns} data={allPosts || []} />
    </div>
  );
}
