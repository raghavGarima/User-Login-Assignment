import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './home.css' 
export const HeaderComponent=({handleOpen,hadleSelectedRole})=>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (roleType) => {
    hadleSelectedRole(roleType)
    setAnchorEl(null);
  };
return(
  <div className="headerDiv">
    <p className="headerText">Users</p>
    <Button variant="outlined" startIcon={<ManageAccountsIcon />} onClick={handleOpen}>
        Add User
      </Button>
    <Button variant="outlined" startIcon={<ManageAccountsIcon />} 
     aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        Roles
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <MenuItem onClick={()=>handleClose('All')}>All</MenuItem>
        <MenuItem onClick={()=>handleClose('Administrator')}>Administrator</MenuItem>
        <MenuItem onClick={()=>handleClose('Manager')}>Manager</MenuItem>
        <MenuItem onClick={()=>handleClose('Author')}>Author</MenuItem>
        <MenuItem onClick={()=>handleClose('Editor')}>Editor</MenuItem>
      </Menu>
  </div>
)
}