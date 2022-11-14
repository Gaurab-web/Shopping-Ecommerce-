import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import './Cats.css'
import { Link } from 'react-router-dom';

export default function Cats() {
    const [category, setChange] = useState([]);

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res=>{
            console.log("Axios Res: ", res.data);
            setChange(res.data);
        })
        .catch(err=>{
            console.log("Axios Err: ", err);
        })
    }, [setChange])
  return (
    <>
        <Container>
            <h1 className='head-cat mt-5 pb-3 mb-5'>Categories</h1>
            <Row className='cat-row'>
               {category.map((cat,index)=>(
                <Col xs = {6} key = {index}>
                <Link to = {`/sub_category/${cat}`} className="cat-link" key = {index}>
                    <Col className="cat-page mt-4">
                        {cat}
                    </Col>
                </Link>
                </Col>
               ))}
            </Row>
        </Container>
    </>
  )
}
