import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='my-5 py-5 w-25 text-center mx-auto'>
            <div className='bg-light my-5 py-5 px-4 rounded'>
                <h4 className='mb-4 text-secondary'>Login Please!</h4>
                <form className='px-5'>
                    <div class="mb-3">
                        <label for="InputEmail1" class="form-label text-secondary">Email</label>
                        <input type="email" name='email' class="form-control" placeholder='Email address' aria-describedby="emailHelp" required />
                    </div>
                    <div class="mb-4">
                        <label for="exampleInputPassword1" class="form-label text-secondary">Password</label>
                        <input type="password" name='password' class="form-control" placeholder='Your password' required />
                    </div>
                    <input type="submit" value="Login" className='btn btn-dark' />
                    <p className='text-secondary mt-4'>You have no account please <Link to='#' className='text-dark'>Registration</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;