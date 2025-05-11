"use client";

import { useGetAlbumsQuery } from "@/lib/features/albumsApiSlice";
import { useGetPostsQuery } from "@/lib/features/postsApiSlice";
import { useGetTodosQuery } from "@/lib/features/todosApiSlice";
import { useGetUsersQuery } from "@/lib/features/usersApiSlice";
import { RadialChart } from "@/components/radial-chart";
export default function Page() {
  const { data: allUsers } = useGetUsersQuery();
  const { data: allTodos } = useGetTodosQuery();
  const { data: allPosts } = useGetPostsQuery();
  const { data: allAlbums } = useGetAlbumsQuery();

  const completedTodos = allTodos?.filter((todo) => todo.completed);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Home</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <RadialChart
          title="Users"
          description="All Users"
          data={[{ left: allUsers?.length || 0, right: 0 }]}
        />
        <RadialChart
          title="Posts"
          description="All Posts"
          data={[{ left: allPosts?.length || 0, right: 0 }]}
        />
        <RadialChart
          title="Albums"
          description="All Albums"
          data={[{ left: allAlbums?.length || 0, right: 0 }]}
        />
        <RadialChart
          title="Todos"
          description="Completed Todos"
          data={[
            { left: completedTodos?.length || 0, right: allTodos?.length || 0 },
          ]}
        />
      </div>
    </div>
  );
}
