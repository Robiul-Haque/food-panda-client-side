import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-light py-3 fixed-top'>
            <div className='container d-flex justify-content-between align-items-center'>
                <div>
                    <h2>FoodPanda</h2>
                </div>
                <div>
                    <Link to="/" className='text-secondary text-decoration-none fw-semibold'>Home</Link>
                    <Link to="/blog" className='text-secondary text-decoration-none fw-semibold mx-5'>Blog</Link>
                    <Link to="/login" className='text-secondary text-decoration-none fw-semibold'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;