import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import './UserList.css'
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'

export default function UserList() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1111/usersData')
            .then(res => {
                console.log("User Res: ", res.data);
                setUser(res.data);
            })
            .catch(err => {
                console.log("User Err: ", err);
            });
    }, [setUser]);

    return (
        <>
            <Container>
                <Row className='sub-cat mt-5 pb-3 mb-5'>
                    <Col xs={9} md={8} className="sub-head">
                        <h1>Users List</h1>
                    </Col>
                    <Col xs={3} md={4} className="add-user">
                        <Link to = "/add_user">
                            <Button variant='warning' size='lg'>
                                Add user
                            </Button>
                        </Link>
                    </Col>
                </Row>

                <Row className='user-list'>
                    {user.map((data) => (
                        <Col key={data.id}>
                            <Row className='user-info pt-4 pb-4'>
                                <Col xs = {5} md = {3} lg = {3} xl = {2} className = "pic-img">
                                    <img src = "../../../../Images/user (1).png" 
                                        alt = "user_img"
                                        className='user-img'
                                    />
                                </Col>
                                <Col className='user-details'>
                                    <p className='user-name-1'>{data.user_Fname} {data.user_Lname}</p>
                                    <p className='user-design-1'>{data.designation}</p>
                                </Col>
                                <Col className='user-mail'>
                                    <p className='email'>{data.email}</p>
                                </Col>
                                <Col className='user-btn'>
                                    <Link to = {`/edit_user/${data.id}`}>
                                        <FiEdit className='edit-btn' title = "edit"/>
                                    </Link>

                                    <Link to = {`/delete_user/${data.id}`}>
                                        <MdDelete className='delete-btn' title = "delete"/>
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
