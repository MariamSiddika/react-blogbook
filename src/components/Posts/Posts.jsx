import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
    return (
        <div className='posts'>
            <Row className='mx-4'>
                <Col xs={12} md={6} lg={4}><Post></Post></Col>
                <Col xs={12} md={6} lg={4}><Post></Post></Col>
                <Col xs={12} md={6} lg={4}><Post></Post></Col>
                <Col xs={12} md={6} lg={4}><Post></Post></Col>
                <Col xs={12} md={6} lg={4}><Post></Post></Col>
                <Col xs={12} md={6} lg={4}><Post></Post></Col>
            </Row>
            {/* <button className='btn btn-lg d-flex mx-auto text-white showMoreBtn px-5 mb-3'>Show More</button> */}
        </div>
    );
};

export default Posts;