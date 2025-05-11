"use client";

import { DataTable } from "@/components/data-table";
import { useGetUsersQuery } from "@/lib/features/usersApiSlice";
import { columns } from "./columns";

export default function UsersPage() {
  const { data: allUsers } = useGetUsersQuery();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <DataTable columns={columns} data={allUsers || []} />
    </div>
  );
}
