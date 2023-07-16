import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSearchParams } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open, addNewUser,handleClose,id,edit,handleEditUser}) {
  const [name,setName]=React.useState("")
  const [email,setEmail]=React.useState("")
  const [role,setRole]=React.useState("")
  const [type,setType]=React.useState("")
  const [status, setStatus] = React.useState('');
  React.useEffect(()=>{
    
    if(edit.length>0){
      setName(edit[0].name)
      setEmail(edit[0].email)
      setRole(edit[0].role)
      setType(edit[0].type)
      setStatus(edit[0].status)
    }
  },[edit])

  const handleSubmit=()=>{if(edit.length==0){
    let data= { id: id[id.length-1].id+1, email: email, name: name,role:role ,type:type,status:status}
    addNewUser(data)
  }
  else{
    let data={id:edit[0].id,email: email, name: name,role:role ,type:type,status:status}
    handleEditUser(data)

  }

  setName("")
  setEmail("")
  setRole("")
  setType("")
  setStatus("")

  }

 const handleNotSubmit=()=>{
    handleClose()
    setName("")
    setEmail("")
    setRole("")
    setType("")
    setStatus("")
  }

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleNotSubmit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <Box>
         <p className='modalheading'>Want to Add NewUser</p>
       </Box>
       <form>
       <TextField
          label="Enter Your Name"
          id="outlined-size-small"
          size="small"
          value={name}
          style={{width:'100%',marginBottom:'12px'}}
          onChange={(event)=>setName(event.target.value)}
        />
        <TextField
          label="Enter Your Name"
          id="outlined-size-small"
          size="small"
          style={{width:'100%',marginBottom:'12px'}}
          value={email}
          className='modal-input'
          onChange={(event)=>setEmail(event.target.value)}
        />
         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Select Role"
          size="small"
          style={{marginBottom:'12px'}}
          onChange={(event)=>setRole(event.target.value)}
        >
          <MenuItem value={'Administrator'}>Administrator</MenuItem>
          <MenuItem value={'Author'}>Author</MenuItem>
          <MenuItem value={'Manager'}>Manager</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select User Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          size="small"
          style={{marginBottom:'12px'}}
          label="Select User Type"
          onChange={(event)=>setType(event.target.value)}
        >
          <MenuItem value={'Admin'}>Admin</MenuItem>
          <MenuItem value={'Staff'}>Staff</MenuItem>
   
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select UserStatus</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          size="small"
          style={{marginBottom:'12px'}}
          label="Select User Status"
          onChange={(event)=>setStatus(event.target.value)}
        >
          <MenuItem value={'Active'}>Active</MenuItem>
          <MenuItem value={'Disabled'}>Disabled</MenuItem>

        </Select>
      </FormControl>


       </form>
       <Box className='modal-btn'>
        <Button variant="contained" color="success" onClick={handleSubmit}>
  Add
</Button>
<Button variant="outlined" color="error" onClick={handleNotSubmit}>
  Cancel
</Button>
        </Box>
        </Box>
       
      </Modal>
    </div>
  );
}
