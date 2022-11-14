import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CarouselBanner from './Carousel/CarouselBanner/CarouselBanner'
import CarouselSection from './Carousel/CarouselSection'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  const [catItem, setNew] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/category/jewelery')
      .then(res => {
        console.log("New Item Res: ", res.data);
        setNew(res.data);
      })
      .catch(err => {
        console.log("New Item Err: ", err);
      });
  }, [setNew]);

  const [allItem, setAll] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        console.log("All Item Res: ", res.data);
        setAll(res.data);
      })
      .catch(err => {
        console.log("All Item Err: ", err);
      });
  }, [setAll]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <CarouselSection />
      <div className='item-caro'>
        <Container>
          <p className='all-head'>Latest Products</p>
          <Carousel responsive={responsive} className="mt-5 mb-4">
            {allItem.map((all) => (
              <div key={all.id}>
                <Row className='all-desc'>
                  <Col xs={6}>
                    <Link to={`/details/${all.category}/${all.id}`}>
                      <div className='all-img'>
                        <img src={all.image} alt="product_img" className='caro-img' />
                      </div>
                    </Link>
                  </Col>
                </Row>
              </div>
            ))}
          </Carousel>
        </Container>
      </div>
      <CarouselBanner />
      <Container>
        <div className='new-head'>
          New Arrivals
        </div>
        <Row className='new-arrival'>
          {catItem.map((data) => (
            <Col className='mt-4 pro-col me-1 me-md-3 mb-5' xs={6} md = {3} lg = {2} key={data.id}>
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
      <div>
        <Container>
          <Row>
            <Col>
              <img src="../../../../Images/home_img1.jpg"
                alt="home_img1"
                className='home-img'
              />
            </Col>
            <Col>
              <img src="../../../../Images/home_img2.jpg"
                alt="home_img2"
                className='home-img'
              />
            </Col>
          </Row>
        </Container>
          <img src = "../../../../Images/home_single.jpg" 
            alt = "home_single_img"
            className='banner-img d-block w-100'
          />
      </div>
    </>
  )
}
