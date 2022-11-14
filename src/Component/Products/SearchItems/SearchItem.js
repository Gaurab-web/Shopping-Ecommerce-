import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import './SearchItem.css'

export default function SearchItem(props) {
    return (
        <>
            <Modal show={props.data} onHide={props.func1}>
                <Modal.Header closeButton>
                    <Modal.Title>Search</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control 
                        type = "text"
                        name = "search"
                        placeholder='Search your product...'
                        onChange={props.func2}
                        className = "search-form"
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}
