"use client";
import Header from "@/components/Header";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";
import { useGetUsersQuery } from "@/state/api";
import {
  DataGrid,
  GridColDef,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import Image from "next/image";
import { useAppSelector } from "../redux";

const CustomToolbar = () => (
  <div className="flex items-center justify-start gap-2">
    <GridToolbarFilterButton />
    <GridToolbarExport />
  </div>
);
const columns: GridColDef[] = [
  { field: "userId", headerName: "Id", width: 100 },
  { field: "username", headerName: "Username", width: 150 },
  {
    field: "profilePictureUrl",
    headerName: "Profile Picture",
    width: 150,
    renderCell: (params) => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-9 w-9">
          <Image
            src={`/${params.value}`}
            alt={params.row.username}
            width={100}
            height={50}
            className="h-full rounded-full object-cover"
          />
        </div>
      </div>
    ),
  },
];
const Users = () => {
  const { data: users, isLoading, isError } = useGetUsersQuery();

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  if (isLoading) return <div>loading ...</div>;
  if (isError || !users) return <div>Error fetching users</div>;

  return (
    <div className="flex w-full flex-col p-8">
      <Header name="Users" />
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={users || []}
          columns={columns}
          getRowId={(row) => row.userId}
          pagination
          slots={{
            toolbar: CustomToolbar,
          }}
          showToolbar
          className={dataGridClassNames}
          sx={dataGridSxStyles(isDarkMode)}
        />
      </div>
    </div>
  );
};

export default Users;
