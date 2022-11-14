import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './DeleteUser.css'

export default function DeleteUser() {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log("Delete User ID: ", id);

    useEffect(()=>{
        axios.delete(`http://localhost:1111/usersData/${id}`)
        .then(res=>{
            alert("Data Deleted Successfully");
            navigate('/user_list');
        })
        .catch(err=>{
            console.log("Delete user Err: ", err);
            alert("Something went wrong");
        });
    })
  return (
    <div className='no-page'>
        <h1 className='no-text'>No results found..</h1>
    </div>
  )
}
