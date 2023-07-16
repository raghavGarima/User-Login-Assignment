import React, { useEffect, useState } from "react";
import { DataGrid ,GridColumnMenu} from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
const columns = [
  { field: 'name', headerName: 'Name',},
  { field: 'email', headerName: 'Email' ,},
  { field: 'role', headerName: 'Role ', },
  {field: 'type', headerName: 'Type',},
  {field: 'status', headerName: 'Status',},
  {field: 'action', headerName: 'Status',},
];




export function DataTable({rows,setEdit,handleDelete}){
  const [count,setCount]=useState(1)
  const [dataToShow,setDataToShow]=useState([])
  useEffect(()=>{
    
    setDataToShow(rows.slice(0,6))
  },[rows])
const handlePagination=(data)=>{
  
if(data=='inc'){
  setCount(count+1)
  setDataToShow(rows.slice(dataToShow.length,6*2))
}
else{
  let cal=6*(count-1)
setCount(count-1)
setDataToShow(rows.slice(cal-6,cal))
}

}
  return (
    <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{    borderBottom: '1.5px solid #c7c2c2'}}>
          <TableRow>
          {columns.map((ele)=>(
            <TableCell key={ele.field}>{ele.headerName}</TableCell>
          ))}
          
          </TableRow>
        </TableHead>
        <TableBody style={{    minHeight: '371px',
    height: '371px'}}>
          {dataToShow.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.role}</TableCell>
              <TableCell >{row.type}</TableCell>
              <TableCell >{row.status}</TableCell>
              <TableCell><EditIcon style={{    color: '#65ade1',    marginRight: '5px'}} onClick={()=>setEdit(row)}  /><DeleteIcon style={{    color: 'red'}} onClick={()=>handleDelete(row)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className="PaginationDiv">
    <button className="btnText" onClick={()=>{if(count>1){handlePagination('dec')}}}>Previous</button>
      <p className="count">{count}</p>
      <button className="btnText" onClick={()=>{if(count*6 <rows.length){handlePagination('inc')}}}>Next</button>
    </div>
{/* 
    // <GridColumnMenu
    // style={{width:'100%'}}
    //   {...props}
    //   slotProps={{
    //     // Swap positions of filter and sort items
    //     columnMenuFilterItem: {
    //       displayOrder: 0, // Previously `10`
    //     },
    //     columnMenuSortItem: {
    //       displayOrder: 10, // Previously `0`
    //     },
    //   }}
    // /> */}
    </>
  );
}
