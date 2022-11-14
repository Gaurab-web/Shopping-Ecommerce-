import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

export default function UpdateUser() {
    const navigate = useNavigate();

    const { id } = useParams();
    console.log("Edit USer ID: ", id);

    const [userData, setData] = useState({
        user_Fname : "",
        user_Lname : "",
        designation : "",
        email : ""
    });

    useEffect(()=>{
        axios.get(`http://localhost:1111/usersData/${id}`)
        .then(res=>{
            console.log("Edit User Res: ", res.data);
            setData(res.data);
        })
        .catch(err=>{
            console.log("Edit USer Err: ", err);
        });
    }, [setData,id]);

    const formSubmit = (event)=>{
        event.preventDefault();
        console.log("Edit USer Data: ", userData);
        axios.put(`http://localhost:1111/usersData/${id}`, userData)
        .then(res=>{
            alert("Data Updated Successfully");
            navigate('/user_list');
        })
        .catch(err=>{
            alert("Something went wrong");
        });
    }
    return (
        <>
            <Container>
                <div className='signup-sec'>
                    <h1 className='sign-sec mt-4 mb-5'>Edit Profile</h1>
                    <Form className = "register-form" onSubmit={formSubmit}>
                        <Form.Group className='mb-3'>
                            <Form.Label><b>First Name</b></Form.Label>
                            <Form.Control
                                type="text"
                                name="user_Fname"
                                value = {userData.user_Fname}
                                onChange = {(event)=>
                                setData((prev)=>({...prev, user_Fname : event.target.value}))
                                }
                            />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label><b>Last Name</b></Form.Label>
                            <Form.Control
                                type="text"
                                name="user_Lname"
                                value = {userData.user_Lname}
                                onChange = {(event)=>
                                setData((prev)=>({...prev, user_Lname : event.target.value}))
                                }
                            />
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label><b>Designation</b></Form.Label>
                            <Form.Control
                                type="text"
                                name="designation"
                                value = {userData.designation}
                                onChange = {(event)=>
                                setData((prev)=>({...prev, designation : event.target.value}))
                                }
                            />
                        </Form.Group>

                        <Form.Group className='mb-5'>
                            <Form.Label><b>Email Address</b></Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value = {userData.email}
                                onChange = {(event)=>
                                setData((prev)=>({...prev, email : event.target.value}))
                                }
                            />
                        </Form.Group>

                        <Form.Group className="d-grid">
                            <Button variant='warning' type='submit'>
                                Save changes
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </>
    )
}
