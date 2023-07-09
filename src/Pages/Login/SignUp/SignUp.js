import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const SignUp = () => {

    const { signUpWithEmailAndPassword } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL);

        signUpWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
            })
            .catch(error => {
                console.log('error', error)
                setError(error.message)
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className='w-75'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign up
                </Button>
                <Form.Text className="text-danger">
                    <p>{error}</p>
                </Form.Text>
            </Form>
        </div>
    );
};

export default SignUp;