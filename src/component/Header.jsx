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
                    <Link to="/" className='text-secondary text-decoration-none fw-semibold me-4'>Home</Link>
                    <Link to="/blog" className='text-secondary text-decoration-none fw-semibold'>Blog</Link>
                    <button className='btn btn-dark ms-4'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;