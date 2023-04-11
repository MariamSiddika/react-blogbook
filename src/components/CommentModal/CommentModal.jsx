import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './CommentModal.css';
import useFetch from '../../hooks/useFetch';
import useFirebase from '../../hooks/useFirebase';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function CommentModal() {
    const [show, setShow] = useState(false);
    const { data, setDataLoading, postData, patchData, error, loading } = useFetch();
    const { user, updateName } = useFirebase();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { postId } = useParams();

    const modalEmailRef = useRef();
    const modalCommentRef = useRef();

    const handleModalComment = (e) => {
        e.preventDefault();
        const modalEmail = modalEmailRef.current.value;
        const modalComment = modalCommentRef.current.value;
        const comments = [...{name: modalComment, email: modalEmail}]
        console.log(comments);
        const commnetUpload = patchData(`https://blogs-server-ms.onrender.com/api/v1/blogs?_id=${postId}`, comments);
        console.log(commnetUpload);
        // new Swal.fire(
        //     'Good job!',
        //     'Your comment is added!',
        //     'success'
        //   )
    }

    return (
        <>
            <Button className='anonymousCommentBtn' onClick={handleShow}>
                Comment on this Blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleModalComment}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter your Email address</Form.Label>
                            <Form.Control
                                ref={modalEmailRef}
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Enter your Comment</Form.Label>
                            <Form.Control ref={modalCommentRef} as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="anonymousCommentClose" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" className='anonymousCommentSubmit'>
                        Comment
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CommentModal;