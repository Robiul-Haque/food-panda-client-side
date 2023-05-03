import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='my-5 py-5 w-25 text-center mx-auto'>
            <div className='bg-light my-5 py-5 px-4 rounded'>
                <h4 className='mb-4 text-secondary'>Registration Please!</h4>
                <form className='px-5'>
                    <div className="mb-3">
                        <label className="form-label text-secondary">Name</label>
                        <input type="text" name='name' className="form-control" placeholder='Your name' required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-secondary">Email</label>
                        <input type="email" name='email' className="form-control" placeholder='Email address' required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-secondary">Photo</label>
                        <input type="file" name='photo' className="form-control" placeholder='Your photo url' required />
                    </div>
                    <div className="mb-4">
                        <label className="form-label text-secondary">Password</label>
                        <input type="password" name='password' className="form-control" placeholder='Your password' required />
                    </div>
                    <input type="submit" value="Login" className='btn btn-dark' />
                    <p className='text-secondary mt-4'>You have an already account please <Link to='/login' className='text-dark'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Registration;