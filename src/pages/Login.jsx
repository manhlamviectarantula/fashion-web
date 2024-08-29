import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Button, Col, Container, Form, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { isFetching, mesError } = useSelector((state) => state.user)

    const handleLogin = (e) => {
        e.preventDefault()
        login(dispatch, { email, password })
    }

    return (
        <div>
            <Header />
            <Container style={{ margin: '30px auto', border: '1.5px solid #212121', borderRadius: '4px' }}>
                <Row style={{ alignItems: 'center' }}>
                    <Col sm={6}>
                        <div className='d-flex flex-column justify-content-center h-custom-2 w-100 ps-5 pe-5 pt-4'>
                            <h2 className="fw-bold mb-2 pb-3 mx-auto" style={{ letterSpacing: '1px' }}>Đăng nhập</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="nhập email..." />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Mật khẩu</Form.Label>
                                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="nhập mật khẩu..." />
                                </Form.Group>
                                <Button
                                    onClick={handleLogin}
                                    style={{ border: 'none', background: isFetching ? '#77b9bf' : '#54a5ac' }}
                                    className='mb-4 w-100 py-2 mt-2'
                                    size="sm">
                                    Đăng nhập
                                </Button>
                            </Form>
                            {/* {error && <p style={{ color: 'red' }} className='mx-auto'>{error}</p>} */}
                            {mesError && <p style={{ color: 'red' }} className='mx-auto'>{mesError}</p>}
                            <p className="small mb-1 pb-lg-3 mx-auto"><a className="text-muted" href="#!">Quên mật khẩu?</a></p>
                            <p className='mx-auto d-flex'>Chưa có tài khoản? <Nav.Link as={NavLink} to="/register" className="link-info"> &nbsp; Đăng ký ngay.</Nav.Link></p>
                        </div>
                    </Col>
                    <Col sm={6} className='d-none d-sm-block px-0'>
                        <img src="https://i.pinimg.com/564x/99/36/01/9936016cf23cfcb68a2972975d1f23a5.jpg"
                            alt="Login" className="w-100" style={{ objectFit: 'cover', objectPosition: 'left', borderRadius: '4px' }} />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Login
