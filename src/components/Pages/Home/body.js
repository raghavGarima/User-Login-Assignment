import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './home.css'
import TextField from '@mui/material/TextField';
import {DataTable} from './UserData'
export const BodyComponent=({rows,filtertype,setEdit})=>{
  const [origin,setOrigin]=useState([])
  const [search,setSearch]=useState('')
    
useEffect(()=>{setOrigin([...rows])},[rows])
useEffect(()=>{
  if(filtertype!=='All'){
  let data=rows.filter((ele)=>{
    
      if(ele.role==filtertype){return ele}
    })
    
    setOrigin([...data])}
    else{
      setOrigin([...rows])
    }
},[filtertype])
  const handleSearch=(event)=>{
    
    setSearch(event.target.value)
    let res=[]
    for(var i=0; i<rows.length; i++) {
      // for(let key in rows[i]) {
        if(rows[i]['name'].toLowerCase().includes(event.target.value.toLowerCase())) {
          res.push(rows[i]);
        }
      // }
    }
    setOrigin(res)
  }
return(
  
      <Box className='BOdyCOmp'>
 <Box sx={{ bgcolor: '#FFF', height: 'calc(100vh - 110px)',    width: '96%',    padding: '10px',    borderTop: '3px solid #59b1eb'}} >
<Box className='SearchBar'>
  Search :   <TextField id="outlined-basic" value={search} onChange={(event)=>{handleSearch(event)}}  variant="outlined"  size="small" style={{width:'25%',    marginLeft: '8px'}} />
</Box>
<Box>
<DataTable rows={origin} setEdit={setEdit}/>
</Box>
 
 </Box>

   
 </Box>
)
}