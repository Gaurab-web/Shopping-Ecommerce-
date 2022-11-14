import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Button, Row, Form, Col, InputGroup } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import './SubCats.css'
import { FiSearch } from 'react-icons/fi'
import SearchItem from '../SearchItems/SearchItem';

export default function SubCats() {
    const { name } = useParams();
    console.log("Name received: ", name);
    const [subCat, setData] = useState([]);

    const [searchData, setSearch] = useState("");
    const handleChange = (event) => {
        const { value } = event.target;
        console.log("Event value: ", value);

        setSearch(value);
    }

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${name}`)
            .then(res => {
                console.log("Axios Res: ", res.data);
                setData(res.data);
            })
            .catch(err => {
                console.log("Axios Err: ", err);
            });
    }, [setData, name])

    // Search Modal Activator
    const [search, setFilter] = useState({active : false});

    const searchOpen = ()=>{
        setFilter({...search, active : !search.active});
    }
    const searchClose = ()=>{
        setFilter({...search, active : !search.active});
    }
    return (
        <>
            <Container>
                <Row className='sub-cat mt-5 pb-3 mb-5'>
                    <Col xs = {9} md = {8} className = "sub-head">
                      <h1>Latest Products</h1>
                    </Col>
                    <Col xs = {3} className = "search-icon" onClick={searchOpen}>
                        <FiSearch className='search-logo'/>
                    </Col>
                    <Col md = {4} className = "search">
                        <InputGroup>
                            <InputGroup.Text>
                                <FiSearch/>
                            </InputGroup.Text>
                            <Form.Control 
                                type = "text"
                                name = "search"
                                placeholder='Search your product...'
                                className='search-filter'
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className='justify-content-between cat-sec'>
                    {subCat.filter((sub) => {
                        if (searchData === "") {
                            return sub;
                        } else if (sub.title.toLowerCase().includes(searchData.toLowerCase())) {
                            return sub;
                        }
                    })
                    .map((sub) => (
                        <React.Fragment key={sub.id}>
                            <Col className='mt-4 pro-col me-3 mb-5' xs={5} md={4} lg = {3}>
                                <Row className='pro-desc'>
                                    <Col>
                                        <div className='img-box'>
                                            <img src={sub.image} alt="product_img" className='sub-img' />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cat-desc mt-3 mb-1 mb-md-3'>
                                            <p className='cat-title'><b>{sub.title}</b></p>
                                            <span className='price'>${sub.price}</span>
                                        </div>
                                        <Link to={`/details/${sub.category}/${sub.id}`} className="d-grid mb-4">
                                            <Button variant='warning' className='pt-2 pb-2 btn-view'>
                                                View Details
                                            </Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </Col>
                        </React.Fragment>
                    ))}
                </Row>
            </Container>

            {/* Search Modal */}
            <SearchItem data = {search.active} func1 = {searchClose} func2 = {handleChange} />
        </>
    )
}
