import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;