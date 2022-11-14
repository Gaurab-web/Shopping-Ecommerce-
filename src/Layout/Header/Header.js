import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { FaUser, FaUserPlus } from 'react-icons/fa'
import { RiLoginCircleFill } from 'react-icons/ri'
import { BiHomeCircle } from 'react-icons/bi'
import { FiShoppingCart } from 'react-icons/fi'
import ProtectRouting from '../../Routing/ProtectRouting'

export default function Header() {
    const navigate = useNavigate();

    const logOuthandle = ()=>{
        window.sessionStorage.clear();
        navigate('/login_form');
    }

    const isloggedIn = window.sessionStorage.getItem('Token');
    const userFName = window.sessionStorage.getItem('FirstName');
    const userLName = window.sessionStorage.getItem('LastName');
    console.log("Token Value: ", isloggedIn);

    const [modal, setModal] = useState({active : false});

    const modalOpen = ()=>{
        setModal({...modal, active : !modal.active});
    }

    const modalClose = ()=>{
        setModal({...modal, active : !modal.active});
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top' collapseOnSelect expand="xl" className='nav-head'>
                <Container>
                    <Navbar.Brand as={Link} to="/" className='head-img'>
                        <img src="./logo_2.png"
                            alt="brand_logo"
                            width="130"
                            height="40"
                            className="d-inline-block align-center"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='link-sec'>
                        <Nav>
                            <Nav.Link as={Link} to="/" className='home-sec ms-0 ms-xl-3'>H<BiHomeCircle className='home-icon' />ME</Nav.Link>
                            <Nav.Link as={Link} to="/about_page" onClick={modalOpen}>ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/category_page" onClick={modalOpen}>ITEMS</Nav.Link>
                            <Nav.Link as={Link} to="/all_products" onClick={modalOpen}>ALL PRODUCTS</Nav.Link>
                            <Nav.Link as={Link} to="/user_list" onClick={modalOpen}>USERS</Nav.Link>
                        </Nav>
                        <Nav>
                            {isloggedIn ? 
                            <>
                            <Nav.Link as = {Link} to = {`/user_details/${userFName}/${userLName}`} className = "welcome">Welcome {userFName}</Nav.Link>
                            <Nav.Link onClick={logOuthandle} className = "log-out">LOGOUT</Nav.Link>
                            </>
                            : 
                            <NavDropdown 
                                title= <FaUserPlus className='user-icon'/>
                                id="basic-nav-dropdown"
                                menuVariant="dark"
                                >
                                <NavDropdown.Item as = {Link} to = "/register_form" className="mb-2 pb-2 pt-2 sign-up">
                                    <FaUser />
                                    <span className='ps-2'>REGISTER</span>
                                </NavDropdown.Item>
                                <NavDropdown.Item as = {Link} to = "/login_form" className="login pb-2 pt-2">
                                    <RiLoginCircleFill />
                                    <span className='ps-2'>LOGIN</span>
                                </NavDropdown.Item>
                            </NavDropdown>
                            }
                            <Nav.Link >
                                <FiShoppingCart className='cart'/>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <ProtectRouting data = {modal.active} func = {modalClose} />
        </>
    )
}
