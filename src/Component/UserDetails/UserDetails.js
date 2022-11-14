import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom';
import './UserDetails.css'
import { Button, Col, Container, Row, ProgressBar } from 'react-bootstrap';
import { FaLocationArrow, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import axios from 'axios'

export default function UserDetails() {
    const navigate = useNavigate();
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res => {
                console.log("Fav Item Res: ", res.data);
                setItem(res.data);
            })
            .catch(err => {
                console.log("Fav Item Err: ", err);
            });
    }, [setItem])

    const { fname, lname, id } = useParams();
    console.log("First Name: ", fname, "Last name: ", lname, "Id Received: ", id);

    const logOutHandle = () => {
        window.sessionStorage.clear();
        navigate('/login_form');
    }
    return (
        <>
            <div className='cover-pic'>
                <img
                    src="../../../../Images/cover-pic.jpg"
                    alt="cover_pic"
                    className='cover-pic-img w-100'
                />
            </div>
            <Container>
                <Row className='profile'>
                    <Col xs={5} md = {4} lg = {3}>
                        <div className='profile-pic'>
                            <img src="../../../../Images/user (1).png" alt="user_icon" className='pro-img-user' />
                        </div>
                    </Col>
                    <Col xs={8} md = {5} lg = {6}>
                        <p className='user-name mt-4 mt-lg-4'>{fname} {lname}</p>
                        <p className='user-desgn'>Advisor and Consultant at ShopKart pvt ltd.</p>
                        <Row className='user-desc mb-5'>
                            <Col className='location mb-2 mb-lg-0' xs={8} lg = {3}>
                                <FaLocationArrow className='me-2' />
                                FD Block, Sector III
                            </Col>
                            <Col className='fb-link mb-2 mb-lg-0' xs={6} lg = {2}>
                                <FaFacebookF className='me-2' />
                                {fname}_{lname}
                            </Col>
                            <Col className='linkdin-link mb-2 mb-lg-0' xs={6} lg = {2}>
                                <FaLinkedinIn className="me-2" />
                                {fname}_{lname}
                            </Col>
                            <Col className='twitter-link' xs={6} lg = {2}>
                                <FaTwitter className="me-2" />
                                {fname}_{lname}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={6} md = {2} lg = {2} className="logout-btn">                  
                        <Button variant='warning' className='mt-0 mt-lg-4 lg-btn' onClick={logOutHandle}>
                            Logout
                        </Button>
                    </Col>
                </Row>
            </Container>
            <div className='details'>
                <Container>
                    <Row className='mt-5 details-row pt-5 pb-5 pb-lg-3'>
                        <Col className='contact-sec'>
                            <p className='pro-head'>Contact Details</p>
                            <div className='address mb-3'>
                                <p className='add-head'>Address</p>
                                <p className='add-desc'>FD Block, Sector III, Bidhannagar, Kolkata</p>
                            </div>
                            <div className='address mb-3'>
                                <p className='add-head'>Phone Number</p>
                                <p className='add-desc'>(+91) - 7541263549</p>
                            </div>
                            <div className='address mb-3'>
                                <p className='add-head'>Email Address</p>
                                <p className='add-desc'>{fname}@gmail.com</p>
                            </div>
                            <div className='address mb-3'>
                                <p className='add-head'>Facebook</p>
                                <p className='add-desc'>@{fname}_{lname}</p>
                            </div>
                            <div className='address mb-4'>
                                <p className='add-head'>LinkedIn</p>
                                <p className='add-desc'>@{fname}_{lname}</p>
                            </div>
                        </Col>
                        <Col className='progress-report'>
                            <p className='pro-head'>Analysis of Usage</p>
                            <div className='pro-1 mb-3'>
                                <p className='pro-name'>Buy items</p>
                                <ProgressBar now={80} label={`${80}%`} variant="dark" />
                            </div>
                            <div className='pro-2 mb-3'>
                                <p className='pro-name'>Wishlist</p>
                                <ProgressBar now={60} label={`${60}%`} variant="dark" />
                            </div>
                            <div className='pro-3 mb-3'>
                                <p className='pro-name'>Add to cart</p>
                                <ProgressBar now={40} label={`${40}%`} variant="dark" />
                            </div>
                            <div className='pro-4 mb-3'>
                                <p className='pro-name'>Filter item</p>
                                <ProgressBar now={70} label={`${70}%`} variant="dark" />
                            </div>
                            <div className='pro-5 mb-3'>
                                <p className='pro-name'>Share items</p>
                                <ProgressBar now={30} label={`${30}%`} variant="dark" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <p className='my-item mt-4 pb-4'>Favourite Items</p>
                <Row className='fav-cart'>
                    {item.map((data) => (
                        <Col className='mt-4 pro-col me-3 mb-5' xs={6} md = {3} lg = {2} key = {data.id}>
                            <Row className='pro-desc'>
                                <Col>
                                    <div className='img-box'>
                                        <img src={data.image} alt="product_img" className='sub-img' />
                                    </div>
                                </Col>
                                <Col>
                                    <div className='cat-desc mt-3 mb-1 mb-md-3'>
                                        <p className='cat-title'><b>{data.title}</b></p>
                                        <span className='price'>${data.price}</span>
                                    </div>
                                    <Link to={`/details/${data.category}/${data.id}`} className="d-grid mb-4">
                                        <Button variant='warning' className='pt-2 pb-2 btn-view'>
                                            View Details
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
