import React from 'react';
import { Form } from 'react-bootstrap';
import './Register.css';

const Register = () => {
    return (
        <div className='register d-flex flex-column align-items-center justify-content-center'>
            <span className="registerTitle pt-0">Register</span>
            <Form className="registerForm d-flex flex-column w-25">
                <Form.Group controlId="formGroupName">
                    <Form.Label className='my-2 mx-0'>Username</Form.Label>
                    <Form.Control className='p-2 bg-white border-0' type="email" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label className='my-2 mx-0'>Email</Form.Label>
                    <Form.Control className='p-2 bg-white border-0' type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label className='my-2 mx-0'>Password</Form.Label>
                    <Form.Control className='p-2 bg-white border-0' type="password" placeholder="Enter Your password" />
                </Form.Group>

                <Form.Group className="mt-3">
                    <Form.Check
                        required
                        name="terms"
                        label="Agree to terms and conditions"
                        // onChange={handleChange}
                        // isInvalid={!!errors.terms}
                        // feedback={errors.terms}
                        feedbackType="invalid"
                        id="validationFormik0"
                    />
                </Form.Group>

                <button type="submit" className="mt-3 btn text-white registerBtn">Register</button>
                <p style={{ fontSize: '20px' }} className='text-center mt-3'>Already have an account?</p>
                <button className="btn text-white registerLoginBtn">Login</button>
            </Form>
        </div>
    );
};

export default Register;