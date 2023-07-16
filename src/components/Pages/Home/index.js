import React, { useEffect, useState } from "react";
import {HeaderComponent} from './header'
import {BodyComponent} from './body';
import BasicModal from './AddUser'

export const MainFile=()=>{
  const [open, setOpen] = React.useState(false);
  const [rows,setRows] =useState( [
    { id: 1, email: 'Garima@gmail.com', name: 'Garima Raghav', age: 35,role:"Administrator" ,type:"Admin",status:'Active' },
    { id: 2, email: 'Lannister@gmail.com ', name: 'Cersei', age: 42,role:"Manager" ,type:"Staff",status:'Active' },
    { id: 3, email: 'Lannister@gmail.com ', name: 'Jaime', age: 45,role:"Administrator" ,type:"Staff",status:'Active' },
    { id: 4, email: 'Stark@gmail.com ', name: 'Arya', age: 16,role:"Author" ,type:"Admin",status:'Disabled' },
    { id: 5, email: 'Targaryen@gmail.com ', name: 'Daenerys', age: null,role:"Administrator" ,type:"Admin",status:'Active' },
    { id: 6, email: 'Melisandre@gmail.com', name: "null", age: 150,role:"Editor" ,type:"Admin",status:'Active' },
    { id: 7, email: 'Clifford@gmail.com', name: 'Ferrara', age: 44,role:"Administrator" ,type:"Staff",status:'Active' },
    { id: 8, email: 'Frances@gmail.com ', name: 'Rossini', age: 36,role:"Administrator" ,type:"Admin",status:'Disabled' },
    { id: 9, email: 'Roxie@gmail.com ', name: 'Harvey', age: 65,role:"Administrator" ,type:"Admin",status:'Active' },
    { id: 10, email: 'Snow@gmail.com', name: 'Jon', age: 35,role:"Administrator" ,type:"Admin",status:'Active' },
  ]) 
  const [filtertype,setFilterType] =useState('All')
  const [edit,setEdit]=useState([])
  useEffect(()=>{console.log(rows)},[rows])
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false);
    setEdit([])}
  const addNewUser=(dataToAdd)=>{
    
    setRows([dataToAdd,...rows])
    handleClose()
  }
  const hadleSelectedRole=(type)=>{
    setFilterType(type)

  }
  const handleEdit=(data)=>{
    debugger
    setEdit([{...data}])
    setOpen(true);
  }
  const handleEditUser=(data)=>{
    debugger
    let editData=rows.map((ele)=>{
      if(ele.id==data.id){
        return data;
      }
      else{
        return ele;
      }
      
    })
  
    setRows([...editData])
    setEdit([])
    handleClose()
  }
return(
  <>
    <HeaderComponent handleOpen={handleOpen} hadleSelectedRole={hadleSelectedRole} />
    <BodyComponent rows={rows} filtertype={filtertype} setEdit={handleEdit} />
    <BasicModal open={open} addNewUser={addNewUser} handleClose={handleClose} id={rows.length} edit={edit} handleEditUser={handleEditUser}/>
  </>
)
}