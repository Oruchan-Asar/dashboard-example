"use client";

import { useGetTodosQuery } from "@/lib/features/todosApiSlice";
import { DataTable } from "@/components/data-table";
import { columns } from "./columns";

export default function TodosPage() {
  const { data: allTodos } = useGetTodosQuery();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Todos</h1>
      <DataTable columns={columns} data={allTodos || []} />
    </div>
  );
}
