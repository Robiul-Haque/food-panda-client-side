import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => console.log('Logged out'))
            .catch(error => console.log(error))
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light py-3 fixed-top">
            <div className="container">
                <NavLink to="/" className='text-dark text-decoration-none fw-semibold'>
                    <h2>FoodPanda</h2>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-end align-items-md-center" id="navbarSupportedContent">
                    <ul className="navbar-nav gap-3 gap-md-5">
                        <li className="nav-item pt-md-1">
                            <NavLink to="/" className='text-secondary text-decoration-none fw-semibold'>Home</NavLink>
                        </li>
                        <li className="nav-item pt-md-1">
                            <NavLink to="/blog" className='text-secondary text-decoration-none fw-semibold'>Blog</NavLink>
                        </li>
                        <li className="nav-item" style={{ paddingTop: '5px' }}>
                            <NavLink to="/login" className='text-secondary text-decoration-none fw-semibold'>Login</NavLink>
                        </li>
                        <li className="nav-item pt-md-1">
                            <NavLink to="/registration" className='text-secondary text-decoration-none fw-semibold'>Registration</NavLink>
                        </li>
                        <li className="nav-item">
                            {
                                user ? <>
                                    <img src={user.photoURL} title={user.displayName
                                    } className='img-fluid rounded-pill' style={{ width: '40px', height: '40px' }} />
                                    <button onClick={handleLogout} className='btn text-secondary fw-semibold'>Logout</button>
                                </> : <span></span>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;