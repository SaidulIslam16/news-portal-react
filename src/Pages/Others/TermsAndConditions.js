import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>This is our terms and conditions</h3>
            <h5>Go back to <Link to='/register'>Register</Link> page</h5>
        </div>
    );
};

export default TermsAndConditions;