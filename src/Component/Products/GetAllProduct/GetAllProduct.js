import React, { useState } from 'react'
// import axios from 'axios'
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import SearchItem from '../SearchItems/SearchItem';
import useGetProduct from './UseGetProduct';

export default function GetAllProduct() {
 
    const [data] = useGetProduct('https://fakestoreapi.com/products');

    // const [getPro, setProduct] = useState([]);

    // useEffect(() => {
    //     axios.get('https://fakestoreapi.com/products')
    //         .then(res => {
    //             console.log("Axios Res: ", res.data);
    //             setProduct(res.data);
    //         })
    //         .catch(err => {
    //             console.log("Axios Err: ", err);
    //         });
    // }, [setProduct]);

    const [searchInput, setSearch] = useState("");
    const handleChange = (event)=>{
        const { value } = event.target;
        console.log("Event Value: ",value);

        setSearch(value);
    }

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
                    <Col xs={9} md={8} className="sub-head">
                        <h1>All Products</h1>
                    </Col>
                    <Col xs={3} className="search-icon">
                        <FiSearch className='search-logo' onClick={searchOpen}/>
                    </Col>
                    <Col md={4} className="search">
                        <InputGroup>
                            <InputGroup.Text>
                                <FiSearch />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                name="search"
                                placeholder='Search your product...'
                                className='search-filter'
                                onChange={handleChange}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className='justify-content-between cat-sec'>
                    {data.filter((item)=>{
                        if(searchInput === ""){
                            return item;
                        }else if(item.title.toLowerCase().includes(searchInput.toLowerCase())){
                            return item;
                        }
                    })
                    .map((item) => (
                        <React.Fragment key={item.id}>
                            <Col className='mt-4 pro-col me-3 mb-5' xs={5} md={4} lg={2}>
                                <Row className='pro-desc'>
                                    <Col>
                                        <div className='img-box'>
                                            <img src={item.image} alt="product_img" className='sub-img' />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='cat-desc mt-3 mb-3'>
                                            <p><b>{item.title}</b></p>
                                            <span className='price'>${item.price}0</span>
                                        </div>
                                        <Link to={`/details/${item.category}/${item.id}`} className="d-grid mb-4">
                                            <Button variant='warning' className='pt-2 pb-2'>
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

            <SearchItem data = {search.active} func1 = {searchClose} func2 = {handleChange} />
        </>
    )
}
