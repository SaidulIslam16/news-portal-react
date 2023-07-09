import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // loader
    if (loading) {
        return <div className='d-flex justify-content-center'>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;