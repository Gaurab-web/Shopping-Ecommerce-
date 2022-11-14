import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

export default function ProtectRouting(props) {
    const isAuth = window.sessionStorage.getItem('Token');
    console.log("Protect Token VAlue: ", isAuth);

    const navigate = useNavigate();

    return isAuth ? <Outlet /> : 

    <Modal show = {props.data} onHide = {props.func} backdrop = "static">
        <Modal.Header>
          <Modal.Title>Alert!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hello! you need to login first then visit this page</Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={()=> {props.func(); navigate('/login_form') }}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
}
