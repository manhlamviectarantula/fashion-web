import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSelector } from 'react-redux';

const CustomNavbar = styled(BootstrapNavbar)`
    padding: 10px;
    background-color: black;

    .navbar-brand {
        color: #54a5ac;
        font-size: 27px; 
        margin-right: 30px;
        font-weight: bold;
    }

    .nav-link {
        color: #c9d1d4;
        position: relative;
        transition: color 0.3s ease;
        margin-right: 20px;

        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 3px;
            width: 100%;
            height: 1.5px;
            background-color: transparent;
            transition: background-color 0.3s ease;
        }

        &:hover {
            color: #a5e9ee;
        }

        &:hover::after {
            background-color: #a5e9ee;
        }

        &.active {
            color: #a5e9ee;
        }

        &.active::after {
            background-color: #a5e9ee;
        }
    }

    .shopping-cart-icon {
        color: #c9d1d4;
        margin-left: 15px;
        font-size: 20px;
        cursor: pointer;
        transition: color 0.3s ease;

        &.active {
            color: #a5e9ee;
        }

        &:hover {
            color: #a5e9ee;
        }
    }

    .account-icon {
        color: #c9d1d4;
        margin-left: 15px;
        font-size: 24px;
        cursor: pointer;
        transition: color 0.3s ease;

        &.active {
            color: #a5e9ee;
        }

        &:hover {
            color: #a5e9ee;
        }
    }
`;

function Header() {
  const user = useSelector((state) => state.user.currentUser)

    return (
        <CustomNavbar expand="lg" sticky="top">
            <Container>
                <CustomNavbar.Brand>FASHION</CustomNavbar.Brand>
                <CustomNavbar.Toggle aria-controls="basic-navbar-nav" />
                <CustomNavbar.Collapse id="basic-navbar-nav" class='ms-auto me-4'>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Trang chủ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/categoryList" className={({ isActive }) => isActive ? 'active' : undefined}>Sản phẩm</Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link as={NavLink} to="/collection" className={({ isActive }) => isActive ? 'active' : undefined}>Bộ sưu tập</Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Liên hệ</Nav.Link>
                        </Nav.Item>
                        {!user &&
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/login" className={({ isActive }) => isActive ? 'active' : undefined}>Đăng nhập</Nav.Link>
                        </Nav.Item>
                        }
                        {
                        user&&
                        <Nav.Item>
                        <Nav.Link as={NavLink} to="/account" className={({ isActive }) => isActive ? 'active' : undefined}>Chào, {user.name}</Nav.Link>
                    </Nav.Item>
                        }
                    </Nav>
                </CustomNavbar.Collapse>
                {user &&
                <NavLink to="/account" className={({ isActive }) => `account-icon ${isActive ? 'active' : ''}`}>
                    <PersonOutlineOutlinedIcon />
                </NavLink>
                }
                <NavLink to="/cart" className={({ isActive }) => `shopping-cart-icon ${isActive ? 'active' : ''}`}>
                    <ShoppingCartOutlinedIcon />
                </NavLink>
            </Container>
        </CustomNavbar>
    );
}

export default Header;
