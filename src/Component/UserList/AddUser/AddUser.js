import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

const validation = (addForm)=>{
    let isError = {};

    const validFname = /^[A-Z]{1}[a-z]{2,8}$/;
    const validLname = /^[A-Z]{1}[a-z]{2,15}$/;
    const validDesign = /^([A-Z]{1}[a-z]{2,15}) ([A-Z]{1}[a-z]{2,20})$/;
    const validEmail = /^([a-z0-9.-]+)@([a-z]{5,8}).([a-z.]{2,8})$/;

    if(!addForm.fname){
        isError.fname = "First name field is empty";
    }else if(!validFname.test(addForm.fname)){
        isError.fname = "Enter a valid first name";
    }

    if(!addForm.user_Lname){
        isError.user_Lname = "Last name field is empty";
    }else if(!validLname.test(addForm.user_Lname)){
        isError.user_Lname = "Enter a valid last name";
    }

    if(!addForm.designation){
        isError.designation = "Designation field is empty";
    }else if(!validDesign.test(addForm.designation)){
        isError.designation = "Enter a valid designation";
    }

    if(!addForm.email){
        isError.email = "Email field is empty";
    }else if(!validEmail.test(addForm.email)){
        isError.email = "Enter a valid email address";
    }

    console.log("Add Item Err Msg: ", isError);
    return isError;
}

export default function AddUser() {
    const navigate = useNavigate();
    let formik = useFormik({
        initialValues : {
            fname : "",
            user_Lname : "",
            designation : "",
            email : ""
        },

        validate : validation,

        onSubmit : (data)=>{
            console.log("Add User Value: ", data);
            let user = {
                user_Fname : data.fname,
                user_Lname : data.user_Lname,
                designation : data.designation,
                email : data.email
            };

            axios.post('http://localhost:1111/usersData', user)
            .then(res=>{
                console.log("Add User Res: ", res.data);
                alert("Data Added Successfully");
                navigate('/user_list');
            })
            .catch(err=>{
                console.log("Add User Err: ", err);
            });
        }
    })
    return (
        <>
            <Container>
                <div className='signup-sec'>
                    <h1 className='sign-sec mt-4 mb-5'>Add an User</h1>
                    <Form className = "register-form" onSubmit={formik.handleSubmit}>
                        <Form.Group className='mb-3'>
                            <Form.Label><b>First Name</b></Form.Label>
                            <Form.Control
                                type="text"
                                name="fname"
                                placeholder='Enter your first name'
                                onChange={formik.handleChange}
                            />
                            <Form.Text>
                                {formik.errors.fname ? 
                                   <span><BsFillInfoCircleFill /> {formik.errors.fname}</span>
                                   :null
                                }
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label><b>Last Name</b></Form.Label>
                            <Form.Control
                                type="text"
                                name="user_Lname"
                                placeholder='Enter your last name'
                                onChange={formik.handleChange}
                            />
                            <Form.Text>
                                {formik.errors.user_Lname ? 
                                   <span><BsFillInfoCircleFill /> {formik.errors.user_Lname}</span>
                                   :null
                                }
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3'>
                            <Form.Label><b>Designation</b></Form.Label>
                            <Form.Control
                                type="text"
                                name="designation"
                                placeholder='Enter your designation'
                                onChange={formik.handleChange}
                            />
                            <Form.Text>
                                {formik.errors.designation ? 
                                   <span><BsFillInfoCircleFill /> {formik.errors.designation}</span>
                                   :null
                                }
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-5'>
                            <Form.Label><b>Email Address</b></Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder='Enter your email address'
                                onChange={formik.handleChange}
                            />
                            <Form.Text>
                                {formik.errors.email ? 
                                   <span><BsFillInfoCircleFill /> {formik.errors.email}</span>
                                   :null
                                }
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className='d-grid'>
                            <Button variant='warning' type='submit'>
                                Add profile
                            </Button>
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </>
    )
}
