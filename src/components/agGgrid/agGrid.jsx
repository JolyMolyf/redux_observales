import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const AgGrid = () => {
  const employes = useSelector(state => {return state.emp.employes})

  const columns = [
    {headerName: "ID",field: "id", sortable: true, checkboxSelection: true},
    {headerName: "Name",field: "employee_name", sortable: true},
    {headerName: "Age",field: "employee_age", sortable: true},
    {headerName: "Salary",field: "employee_salary", sortable: true},
  ]

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
  }

  const onSelectionChanged = (event) => {
    console.log(event.api.getSelectedRows())
  }



  return (
    <div>
      <h2>Hello from grid Component</h2>
      <div className="ag-theme-alpine" style={{height: 400, width: '53%'}}>
        <AgGridReact 
          columnDefs={columns}
          defaultColDef={defaultColDef}
          rowData={[...employes]}
          rowSelection={'multiple'}
          onSelectionChanged={onSelectionChanged}
          pagination={true}
          paginationPageSize={20}
          />
      </div> 
    </div>)
}

export default AgGrid;