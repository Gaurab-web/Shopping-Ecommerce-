import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarouselSection.css'

export default function CarouselSection() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-height"
                        src="../../../../Images/banner_8.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-height"
                        src="../../../../Images/banner_4.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-height"
                        src="../../../../Images/banner_1.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-height"
                        src="../../../../Images/banner_5.jpg"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-height"
                        src="../../../../Images/banner_9.jpg"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-height"
                        src="../../../../Images/banner_3.jpg"
                        alt="Sixth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-height"
                        src="../../../../Images/banner_7.jpg"
                        alt="Seventh slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}
