import React from 'react'
import { Button, Col, Container, Row, Form } from 'react-bootstrap'

const Contact = () => {
    return (
            <Container style={{ margin: '30px auto', borderRadius: '4px' }}>
                <Row style={{ alignItems: 'center' }}>
                    <Col sm={6}>
                        <div className='d-flex flex-column justify-content-center h-custom-2 w-100 ps-5 pe-5 pt-4' style={{ border: '1.5px dashed #212121' }}>
                            <h2 className="fw-bold mb-2 pb-3 mx-auto" style={{ letterSpacing: '1px' }}>Liên hệ hỗ trợ</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="nhập email..." />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control type="string" placeholder="nhập số điện thoại..." />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Nội dung</Form.Label>
                                    <Form.Control as="textarea" rows={5} placeholder="nội dung..." />
                                </Form.Group>
                                <Button
                                    style={{ border: 'none', background: '#54a5ac' }}
                                    className='mb-3 w-100 py-2 mt-2'
                                    size="sm">
                                    Gửi
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={6} className='d-sm-block px-0 '>
                        <iframe
                            className="map w-100"
                            title="Google Maps"
                            style={{ height: '500px', border: '1px solid black' }}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.610784609875!2d106.65339277405316!3d10.76444998938358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752959abdde3dd%3A0xa1ae728c26f860be!2sVTC%20Academy%20Plus!5e0!3m2!1svi!2s!4v1712028081404!5m2!1svi!2s"
                            allowfullscreen=""
                        ></iframe>
                    </Col>
                </Row>
            </Container>
    )
}

export default Contact
