import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Details.css'
import { FaStarHalfAlt, FaStar, FaRegStar } from 'react-icons/fa'

export default function Details() {
    const {name, id} = useParams();
    console.log("Id received: ",id, "Name received: ", name);
    
    const [data, setDetail] = useState([]);

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>{
            console.log("Axios Res: ",res.data);
            setDetail(res.data);
        })
        .catch(err=>{
            console.log("Axios Err: ", err);
        });
    }, [setDetail,id]);
  return (
    <>
        <Container>
            <Row className='justify-content-between mb-5 pt-5 pb-5'>
                <Col className='mt-4' xs = {4} lg = {3}>
                    <img src={data.image} alt="product-img" className='pro-img'/>
                </Col>
                <Col className='mt-4' xs = {7} lg = {7}>
                    <div className='category'>
                        <p>{name}</p>
                    </div>
                    <div className='title'>
                        <p>{data.title}</p>
                    </div>
                    <div className='rating mb-4'>
                        <div className='rating-icon'>
                            <FaStar className='logo'/>
                            <FaStar className='logo'/>
                            <FaStar className='logo'/>
                            <FaStarHalfAlt className='logo'/>
                            <FaRegStar className='logo'/>
                            <span className='ps-1 rating-num'><b>4.5</b></span>
                        </div>
                    </div>
                    <div className='price-detail mb-4'>
                        <p>$ {data.price}</p>
                    </div>
                    <div className='description mb-5'>
                        <p>{data.description}</p>
                    </div>
                    <Row className='btn-sec'>
                        <Col xs = {6} lg = {4}>
                            <Button variant="dark" size='lg'>Add to cart</Button>
                        </Col>
                        <Col xs = {6} lg = {4}>
                            <Button variant="warning" size='lg'>Buy now</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}
