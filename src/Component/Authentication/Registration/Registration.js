import React, { useState } from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import './Registration.css'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Registration(props) {
    const navigate = useNavigate();

    const [inputState, setChange] = useState({ isError: { fname: "", lname: "", email: "", password: "" } });

    const validFname = RegExp('^[A-Z]{1}[a-z ]{2,20}$');
    const validLname = RegExp('^[A-Z]{1}[a-z ]{2,20}$');
    const validEmail = RegExp('^([a-z0-9.-]+)@([a-z]{4,15}).([a-z.]{2,6})$');
    const validPassword = RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$');

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log("Name: ", name, "value: ", value)

        let errorMsg = { ...inputState.isError };
        switch (name) {
            case "fname": errorMsg.fname = validFname.test(value) ? "" : "Name should start with capital letter and it should not be more than 20 characters";
                // value.length < 6 ? "There must be more than 6 characters" : "";
                break;
            case "lname": errorMsg.lname = validLname.test(value) ? "" : "Name should start with capital letter and it should not be more than 20 characters";
                // value.length < 6 ? "There must be more than 6 characters" : "";
                break;
            case "email": errorMsg.email = validEmail.test(value) ? "" : "Enter a valid email address";
                // value.length < 10 ? "There must be more than 10 characters" : "";
                break;
            case "password": errorMsg.password = validPassword.test(value) ? "" : "Must use (A-Z), (a-z), (0-9) and (!@#$%^&*)";
                // value.length < 18 ? "There must be more than 18 characters" : "";
                break;
            default:
                break;
        }

        setChange({ ...inputState, [name]: value, isError: errorMsg });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Submitted value: ", inputState);
        axios.post('https://nodeprojectapi.herokuapp.com/register', inputState)
            .then(res => {
                console.log("Axios Res: ", res.data.regdata);
                alert(res.data.message);
                navigate('/login_form');
            })
            .catch(err => {
                console.log("Axios Err: ", err);
            });
    }
    return (
        <>
            <Container>
                <div className='signup-sec'>
                    <h1 className='sign-sec mt-4 mb-5'>Create account</h1>
                    <Form onSubmit={submitHandler} className = "register-form">
                        <Form.Group className="mb-3">
                            <Form.Label><b>First Name</b></Form.Label>
                            <Form.Control
                                type='text'
                                name="fname"
                                placeholder='Enter your full name'
                                onChange={handleChange}
                            />
                            <Form.Text>
                                {inputState.isError.fname.length > 0 ?
                                    <span><BsFillInfoCircleFill /> {inputState.isError.fname}</span>
                                    : null
                                }
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><b>Last Name</b></Form.Label>
                            <Form.Control
                                type='text'
                                name="lname"
                                placeholder='Enter your full name'
                                onChange={handleChange}
                            />
                            <Form.Text>
                                {inputState.isError.lname.length > 0 ?
                                    <span><BsFillInfoCircleFill /> {inputState.isError.lname}</span>
                                    : null
                                }
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label><b>Email Address</b></Form.Label>
                            <Form.Control
                                type='email'
                                name="email"
                                placeholder='Enter your email address'
                                onChange={handleChange}
                            />
                            <Form.Text>
                                {inputState.isError.email.length > 0 ?
                                    <span><BsFillInfoCircleFill /> {inputState.isError.email}</span>
                                    : null
                                }
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-5">
                            <Form.Label><b>Password</b></Form.Label>
                            <Form.Control
                                type='password'
                                name="password"
                                placeholder='Enter your password'
                                onChange={handleChange}
                            />
                            <Form.Text>
                                {inputState.isError.password.length > 0 ?
                                    <span><BsFillInfoCircleFill /> {inputState.isError.password}</span>
                                    : null
                                }
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className='d-grid pb-2'>
                            <Button variant="warning" type="submit" onClick={props.func}>Create Account</Button>
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </>
    )
}
