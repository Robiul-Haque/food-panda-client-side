import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../FireBase.config';
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";

const Login = () => {

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const auth = getAuth(app);

    const login = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                // console.log(user);
            })
            .catch(error => console.log(error))
    }

    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // console.log(result.user);
                setSuccessMessage('Google login successful');
            })
            .catch(error => {
                console.log(error.message);
                setErrorMessage(error.message);
            })
    }

    const gitHubLogin = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                // console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
                setErrorMessage(error.message);
            })
    }

    return (
        <div className='my-md-5 my-sm-2 py-5 w-100 text-center mx-auto responsive-width-form'>
            <div className='bg-light my-5 py-5 px-4 rounded'>
                <h4 className='mb-4 text-secondary'>Login Please!</h4>
                <form onSubmit={login} className='px-5'>
                    <div className="mb-3">
                        <label className="form-label text-secondary">Email</label>
                        <input type="email" name='email' className="form-control" placeholder='Email address' required />
                    </div>
                    <div className="mb-4">
                        <label className="form-label text-secondary">Password</label>
                        <input type="password" name='password' className="form-control" placeholder='Your password' required />
                    </div>
                    <input type="submit" value="Login" className='btn btn-dark' />
                </form>
                <p className='text-secondary mt-3'>Or sign in with</p>
                <div>
                    <button onClick={googleLogin} className='btn btn-dark me-4'>Google</button>
                    <button onClick={gitHubLogin} className='btn btn-dark'>Github</button>
                </div>
                <p className='text-secondary mt-4'>You have an already account please <Link to='/registration' className='text-dark'>Registration</Link></p>
                {
                    successMessage && <p className='text-success'>
                        <FaCheckCircle></FaCheckCircle> {successMessage}
                    </p>
                }
                {
                    errorMessage && <p className='text-danger'>
                        <FaExclamationCircle></FaExclamationCircle> {errorMessage}
                    </p>
                }
            </div>
        </div>
    );
};

export default Login;