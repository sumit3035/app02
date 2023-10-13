import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

function LoginModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group >
                            <Form.Group className="mb-3" controlId="schoolId" >
                                <Form.Label >Select School</Form.Label>
                                <Form.Select class="form-control" >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="loginType">
                                <Form.Label>Login Type</Form.Label>
                                <div key={`inline-radio`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="School"
                                        name="group1"
                                        type='radio'
                                        id={`inline-radio-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Student"
                                        name="group1"
                                        type='radio'
                                        id={`inline-radio-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Parents"
                                        name="group1"
                                        type='radio'
                                        id={`inline-radio-3`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Others"
                                        name="group1"
                                        type='radio'
                                        id={`inline-radio-4`}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button variant="primary " type="submit">
                            Submit
                        </Button>{' '}
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Form>
                </Modal.Body>
                <Modal.Footer>


                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal