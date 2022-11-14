import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import axios from 'axios'

export default function Footer() {
  const [cats, setCat] = useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then(res=>{
      console.log("Axios Res: ", res.data);
      setCat(res.data);
    })
    .catch(err=>{
      console.log("Axios Err: ", err);
    });
  }, [setCat]);
  return (
    <div className='foot-bar'>
      <Container>
        <Row className='justify-content-between'>
          <Col xs = {12} md = {2} className = "mb-4 mb-md-0">
            <div className='brand-logo'>
              <img src="./logo_2.png"
                alt="brand_logo"
                width="130"
                height="40"
                className="mb-3 brand-lg"
              />
            </div>
            <div className='brand-desp'>
              Be it clothing, electronics or jeweleries, ShopKart offers you the ideal combination of fashion and functionality for men, women and kids. 
            </div>
          </Col>
          <Col xs = {12} md = {2} className = "mb-3 mb-md-0">
            <div className='feature'>
              <p className='fea-title'>Featured</p>
              <Row className='fea-items'>
                {cats.map((catName, index)=>(
                  <React.Fragment key = {index}>
                    <Link to = {`/sub_category/${catName}`}>
                      <Col className='mb-3'>{catName}</Col>
                    </Link>
                  </React.Fragment>
                ))}
              </Row>
            </div>
          </Col>
          <Col xs = {12} md = {2} className = "mb-3 mb-md-0">
            <div className='quick-links'>
              <p className='link-title'>Quick Links</p>
              <Row className='lin-items'>
                <Link to = "/about_page">
                  <Col className='mb-3'>ABOUT</Col>
                </Link>

                <Link to = "/category_page">
                  <Col className='mb-3'>PRODUCT</Col>
                </Link>

                <Link to = "/contact">
                  <Col className='mb-3'>FEEDBACK</Col>
                </Link>
              </Row>
            </div>
          </Col>
          <Col xs = {12} md = {2} className = "mb-3 mb-md-0">
            <div className='contact'>
              <p className='con-title'>Contact Us</p>
              <Row className='con-items'>
                <Col>
                  <div className='address'>
                    <p className='add-title'>ADDRESS</p>
                    <p className='add-desp'>FD Block, Sector III, Bidhannagar, Kolkata</p>
                  </div>
                </Col>
                <Col>
                  <div className='mob'>
                    <p className='mob-title'>PHONE</p>
                    <p className='mob-desp'>(+91) - 7031104333</p>
                  </div>
                </Col>
                <Col>
                  <div className='dev_email'>
                    <p className='email-title'>EMAIL</p>
                    <p className='email-desp'>gaurab123@gmail.com</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs = {12} md = {2} className = "mb-3 mb-md-0">
            <div className='getouch'>
              <p className='get-title'>Get In Touch</p>
              <p className='get-desp'>Subscrible for latest stories and promotions</p>
              <Form.Group className='mb-3'>
                <Form.Control 
                  type = "email"
                  name = "email"
                  placeholder='Your email address'
                  className='subs'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Button variant='warning' className='subs-btn'>SUBSCRIBE</Button>
              </Form.Group>
              <div className='social-links'>
              <Row>
                <Col xs = {2}>
                  <div className='fb-link'>
                    <BsFacebook className='fb'/>
                  </div>
                </Col>
                <Col xs = {2}>
                  <div className='twi-link'>
                    <FiTwitter className='twi'/>
                  </div>
                </Col>
                <Col xs = {2}>
                  <div className='linkdin-link'>
                    <BsLinkedin className='linkdin'/>
                  </div>
                </Col>
                <Col xs = {2}>
                  <div className='insta-link'>
                    <BsInstagram className='insta'/>
                  </div>
                </Col>
              </Row>
            </div>
            </div>
          </Col>
        </Row>
        <Row className='lower-footer'>
          <Col xs = {12} md = {6} className="mb-4 mb-md-0">
            <img src='https://www.boerandfitch.com/themes/at_nova/assets/img/modules/appagebuilder/images/payments_fdc8def378dab029cee5d1826dc92740.png'
              alt = "payment-sec"
              className='pay-img'
            />
          </Col>
          <Col xs = {12} md = {6}>
            <div className='copyright'>
              <p className='copyright-desp pt-2'>ShopKart eCommerce &copy; 2021. All Rights Reserved</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
