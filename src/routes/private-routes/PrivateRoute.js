import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import { AuthContext } from '../../contexts/UserContext';

const PrivateRoute = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <Spinner></Spinner>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }

    return children;
};

export default PrivateRoute;