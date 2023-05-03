import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-light py-3'>
            {/* <Navbar bg="light" expand="lg">
                <Container>
                    <div>
                        <Navbar.Brand className='fw-bold fs-3'>FoodPanda</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </div>
                    <div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-5">
                                <Nav.Link>
                                    <Link to="/" className='text-secondary text-decoration-none'>Home</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/blog" className='text-secondary text-decoration-none'>Blog</Link>
                                </Nav.Link>
                            </Nav>
                            <Button variant="dark">Login</Button>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar> */}
            <div className='container d-flex justify-content-between align-items-center'>
                <div>
                    <h2>FoodPanda</h2>
                </div>
                <div>
                    <Link to="/" className='text-secondary text-decoration-none fw-semibold me-4'>Home</Link>
                    <Link to="/blog" className='text-secondary text-decoration-none fw-semibold'>Blog</Link>
                    <button className='btn btn-dark ms-4'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;