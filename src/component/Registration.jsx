import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import app from '../FireBase.config';

const Registration = () => {

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const auth = getAuth(app);

    const registration = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        event.target.reset();

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                // console.log(user);
                updateUSer(user, name, photo);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const updateUSer = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(result => {
                // console.log(result);
                setSuccessMessage('Registration successful');
            })
            .catch(error => {
                console.log(error.message);
                setErrorMessage(error.message);
            })
    }

    const googleLogin = () => {
        setSuccessMessage('');
        setErrorMessage('');

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
        setSuccessMessage('');
        setErrorMessage('');

        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                // console.log(result.user);
                setSuccessMessage('Github login successful');
            })
            .catch(error => {
                console.log(error.message);
                setErrorMessage(error.message);
            })
    }

    return (
        <div className='my-md-5 my-sm-2 py-5 w-100 text-center mx-auto responsive-width-form'>
            <div className='bg-light my-5 py-5 px-4 rounded'>
                <h4 className='mb-4 text-secondary'>Registration Please!</h4>
                <form onSubmit={registration} className='px-5'>
                    <div className="mb-3">
                        <label className="form-label text-secondary">Name</label>
                        <input type="text" name='name' className="form-control" placeholder='Your name' required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-secondary">Email</label>
                        <input type="email" name='email' className="form-control" placeholder='Email address' required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label text-secondary">Photo URL</label>
                        <input type="text" name='photo' className="form-control" placeholder='Your photo url' required />
                    </div>
                    <div className="mb-4">
                        <label className="form-label text-secondary">Password</label>
                        <input type="password" name='password' className="form-control" placeholder='Your password' required />
                    </div>
                    <input type="submit" value="Registration" className='btn btn-dark' />
                </form>
                <p className='text-secondary mt-3'>Or sign in with</p>
                <div>
                    <button onClick={googleLogin} className='btn btn-dark me-4'>Google</button>
                    <button onClick={gitHubLogin} className='btn btn-dark'>Github</button>
                </div>
                <p className='text-secondary mt-4'>You have an already account please <Link to='/login' className='text-dark'>Login</Link></p>
                {
                    successMessage && <p className='text-success mb-0'>
                        <FaCheckCircle></FaCheckCircle> {successMessage}
                    </p>
                }
                {
                    errorMessage && <p className='text-danger mb-0'>
                        <FaExclamationCircle></FaExclamationCircle> {errorMessage}
                    </p>
                }
            </div>
        </div>
    );
};

export default Registration;