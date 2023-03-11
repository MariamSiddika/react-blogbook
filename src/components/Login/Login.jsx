import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {

    return (
        <div className='login d-flex flex-column align-items-center justify-content-center'>
            <span className="loginTitle">Login</span>
            <Form className="loginForm mt-4 d-flex flex-column">
                <Form.Group controlId="formGroupEmail">
                    <Form.Label className='my-2 mx-0'>Email</Form.Label>
                    <Form.Control className='p-2 bg-white border-0' type="email" placeholder="Enter Your Email..." />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label className='my-2 mx-0'>Password</Form.Label>
                    <Form.Control className='p-2 bg-white border-0' type="password" placeholder="Enter Your password..." />
                </Form.Group>

                <button type="submit" className="mt-4 btn text-white loginBtn">Login</button>
                <p style={{ fontSize: '20px' }} className='text-center mt-3'>New in here?</p>
                <button className="btn text-white loginRegisterBtn">Register</button>
            </Form>
        </div>
    );
};

export default Login;