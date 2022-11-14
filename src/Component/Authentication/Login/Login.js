import { useFormik } from 'formik'
import React from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import './Login.css'



const validation = (logindata) => {
  let isError = {};

  const validEmail = /^([a-z0-9.-]+)@([a-z]{5,15}).([a-z.]{2,6})$/;
  const validPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,15}$/;
  if (!logindata.email) {
    isError.email = "Email is required";
  }
  else if (!validEmail.test(logindata.email)) {
    isError.email = "Enter a valid email address";
  }

  if (!logindata.password) {
    isError.password = "Password is required";
  }
  else if (!validPassword.test(logindata.password)) {
    isError.password = "Must contain (A-Z), (a-z), (0-9), and (!@#$%^&*)";
  }

  console.log("Error Msg: ", isError);
  return isError;
}

export default function Login(props) {
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validate: validation,

    onSubmit: (data) => {
      console.log("Received value for login form: ", data);
      axios.post('https://nodeprojectapi.herokuapp.com/login', data)
        .then(res => {
          console.log("Axios Res: ", res.data.data);
          alert(res.data.message);
          window.sessionStorage.setItem('Token', res.data.data.token);
          window.sessionStorage.setItem('FirstName', res.data.data.firstname);
          window.sessionStorage.setItem('LastName', res.data.data.lastname);
          navigate(`/user_details/${res.data.data.firstname}/${res.data.data.lastname}`);
        })
        .catch(err => {
          console.log("Axios Err: ", err);
        });
    }
  })
  return (
    <Container>
      <div className='log-sec'>
        <h1 className='mt-4 mb-5 login-sec'>Login</h1>
        <Form onSubmit={formik.handleSubmit} className="log-form">
          <Form.Group className='mb-3'>
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
                : null
              }
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-5'>
            <Form.Label><b>Password</b></Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder='Enter your password'
              onChange={formik.handleChange}
            />
            <Form.Text>
              {formik.errors.password ?
                <span><BsFillInfoCircleFill /> {formik.errors.password}</span>
                : null
              }
            </Form.Text>
          </Form.Group>

          <Form.Group className='d-grid pb-2'>
            <Button variant="warning" type="submit" onClick={props.func}>
              Login
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  )
}
