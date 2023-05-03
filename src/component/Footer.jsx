import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-light py-5 mt-5'>
            <div className='container pt-5'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h2>FoodPanda</h2>
                    </div>
                    <div>
                        <h5>Navigation</h5>
                        <div className='d-flex justify-content-center flex-column'>
                            <Link to='/' className='text-secondary text-decoration-none'>Home</Link>
                            <Link to='/blog' className='text-secondary text-decoration-none'>Blog</Link>
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