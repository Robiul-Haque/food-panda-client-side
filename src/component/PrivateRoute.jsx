import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }

    if (user) {
        return children;
    } else {
        <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
    }
};

export default PrivateRoute;