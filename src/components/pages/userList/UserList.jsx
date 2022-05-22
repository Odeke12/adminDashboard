import React from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 200, renderCell: (params) => {
        return (
            <div className='userListUser'>
                <img  className='userListImg' src={params.row.avatar} alt=""/>
                {params.row.username}
            </div>
        )
    } },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'status',
      headerName: 'status',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction volume',
      width: 180 ,

    },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params)=> {
            return(
            <>
            <button className="userListEdit">Edit</button>
            <DeleteOutline className='userListDelete'/>
            </>
            )
        } 
    }
  ];
  
  const rows = [
    { id: 1, username: 'Jon Snow', email: 'john@gmail.com', status: 'pending', transaction: '$123.0', avatar: process.env.PUBLIC_URL + "/profile.jpeg"},
    { id: 2, username: 'Odeke Trevor', email: 'trevor@gmail.com', status: 'active', transaction: '$34.0', avatar: process.env.PUBLIC_URL + "/profile.jpeg"},
  ];

export default function UserList() {
  return (
    <div className='userList'>
              <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick

      />
    </div>
  )
}
