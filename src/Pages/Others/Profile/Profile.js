import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);

    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = event => {
        setName(event.target.value);
    }
    return (
        <div>
            <h3><span className='text-body-tertiary'>Welcome:</span> {user?.displayName}</h3>
            <Form onSubmit={handleSubmit} className='mt-5'>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="passtextword" placeholder="photoURL" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Profile;