import React from 'react';
import error from '../assets/error.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container text-center'>
            <img src={error} alt="error-image" />
            <h4 className='text-secondary'>Page not found</h4>
            <Link to="/" className='text-secondary fw-semibold'>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;