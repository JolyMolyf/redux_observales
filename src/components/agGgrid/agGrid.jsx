import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { deleteEmployesAttemp, updateEmployeeAttemp } from "../../redux/actions/employesActions";


const AgGrid = ({setSelectedEmployes}) => {
  const dispatch = useDispatch();
  const employes = useSelector(state => {return state.emp.employes})

  const [ emps, setEmps ] = useState(employes);
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const handleUpdate = (oldData) => {
    console.log(oldData, ' update')
    dispatch(updateEmployeeAttemp(oldData))
  }
  const handleDelete = (data) => {
    console.log(data, ' delete')
    dispatch(deleteEmployesAttemp(data))
  }

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };


  useEffect(()=> {
    setEmps(employes)
  }, [employes])

  const columns = [
    {headerName: "ID",field: "id", sortable: true, checkboxSelection: true, filter:"agNumberColumnFilter", },
    {headerName: "Name",field: "employee_name", sortable: true},
    {headerName: "Age",field: "employee_age", sortable: true, editable:false, filter:"agNumberColumnFilter",  cellStyle: (params)=>( 
      params.value>18 && params.value<50?{borderLeft: "4px solid green"}:{borderLeft: "4px solid tomato"}
    )},
    {headerName: "Salary",field: "employee_salary", sortable: true, filter:"agNumberColumnFilter"},
    {
      headerName: "Actions", field: "id", filter: false, cellRendererFramework: (params) => <div>
        <button  onClick={() => handleUpdate(params.data)}>Update</button>
        <button  onClick={() => handleDelete(params.value)}>Delete</button>
      </div>
    }
  ]

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
   
  }

  const onSelectionChanged = (event) => {
    setSelectedEmployes(event.api.getSelectedRows())
  }
  const getRowNodeId = data => {
    return data.id;
  };

  const setAge = () => {
    const empsTemp = emps;
    setEmps(empsTemp.map((el )=>{  
      console.log(el.employee_age, ' after')
      return {...el, employee_age: el.employee_age + 2}
      
    }));
    gridApi.refreshCells() 
  }


  return (
    <div>
      <h2>Hello from grid Component</h2>
      <button onClick={setAge}>Click</button>
      <div className="ag-theme-alpine" data-testid={`grid`} style={{height: 600, minwidth: '53%'}}>
        <AgGridReact 
          suppressColumnVirtualisation={true}
          columnDefs={columns}
          defaultColDef={defaultColDef}
          rowData={[...emps]}
          rowSelection={'multiple'}
          onSelectionChanged={onSelectionChanged}
          pagination={true}
          paginationPageSize={20}
          onGridReady={onGridReady}
          immutableData={true}
          getRowNodeId={getRowNodeId}
          />
      </div> 
    </div>)
}

export default AgGrid;