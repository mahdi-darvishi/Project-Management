"use client";
import Header from "@/components/Header";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";
import { useGetTeamsQuery } from "@/state/api";
import {
  DataGrid,
  GridColDef,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useAppSelector } from "../redux";

const CustomToolbar = () => (
  <div className="flex items-center justify-start gap-2">
    <GridToolbarFilterButton />
    <GridToolbarExport />
  </div>
);
const columns: GridColDef[] = [
  { field: "id", headerName: "Team ID", width: 100 },
  { field: "teamName", headerName: "Team Name", width: 150 },
  {
    field: "productOwnerUsername",
    headerName: "Product Owner Username",
    width: 230,
  },
  {
    field: "projectManagerUsername",
    headerName: "Project Manager Username",
    width: 230,
  },
];
const Teams = () => {
  const { data: teams, isLoading, isError } = useGetTeamsQuery();

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  if (isLoading) return <div>loading ...</div>;
  if (isError || !teams) return <div>Error fetching Teams</div>;

  return (
    <div className="flex w-full flex-col p-8">
      <Header name="Teams" />
      <div style={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={teams || []}
          columns={columns}
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

export default Teams;
