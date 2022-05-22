import React from 'react'
import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { rows } from '../../../dummyData';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function UserList() {
    const [data, setData] = useState(rows)

    const handleDelete = (id) => {
        setData(data.filter(item=>item.id !== id))
    }

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
                <Link to={`users/${params.row.id}`}>
                <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
    
                </>
                )
            } 
        }
      ];
  return (
    <div className='userList'>
              <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick

      />
    </div>
  )
}
