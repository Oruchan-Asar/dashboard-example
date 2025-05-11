"use client";

import { useGetAlbumsQuery } from "@/lib/features/albumsApiSlice";
import { columns } from "./columns";
import { DataTable } from "@/components/data-table";

export default function AlbumsPage() {
  const { data: allAlbums } = useGetAlbumsQuery();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Albums</h1>
      <DataTable columns={columns} data={allAlbums || []} />
    </div>
  );
}
