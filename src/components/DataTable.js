import { DataGrid } from '@mui/x-data-grid';

const DataTable = ({ rows }) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'company', headerName: 'Company', width: 200, valueGetter: (params) => params.row.company.name },
  ];

  return <DataGrid rows={rows} columns={columns} pageSize={5} />;
};

export default DataTable;






