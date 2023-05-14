import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-light py-5'>
            <div className='container pt-5'>
                <div className='d-flex flex-md-row justify-content-between flex-sm-wrap flex-column'>
                    <div>
                        <NavLink to="/" className='text-dark text-decoration-none fw-semibold'>
                            <h2>FoodPanda</h2>
                        </NavLink>
                    </div>
                    <div>
                        <h5>Navigation</h5>
                        <div className='d-flex justify-content-center flex-column'>
                            <NavLink to='/' className='text-secondary text-decoration-none'>Home</NavLink>
                            <NavLink to='/blog' className='text-secondary text-decoration-none'>Blog</NavLink>
                        </div>
                    </div>
                    <div>
                        <h5>follow us</h5>
                        <p>Facebook</p>
                        <p>twitter</p>
                        <p>Youtube</p>
                    </div>
                    <div>
                        <h5>Newsletter</h5>
                        <input type="email" name="email" placeholder='Your email address' className='form-control' />
                        <input type="submit" value="Submit" className='btn btn-dark mt-3' />
                    </div>
                </div>
                <p className='mb-0 mt-4 text-center fs-6'>© FoodPanda 2023 Italian chinese food</p>
            </div>
        </div>
    );
};

export default Footer;