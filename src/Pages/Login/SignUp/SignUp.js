import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const { signUpWithEmailAndPassword, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [terms, setTerms] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        // console.log(name, email, password, photoURL);

        if (!terms) {
            setError('Accept the Terms and Conditions to Create an Account')
            return;
        }

        signUpWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                handleUpdateProfileInfo(name, photoURL);
                form.reset();
            })
            .catch(error => {
                console.log('error', error)
                setError(error.message)
            })
    }

    const handleUpdateProfileInfo = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => {
                setError(e.message)
                console.log(e);
            })
    }

    const handleTermsAndConditions = event => {
        console.log(event.target.checked);
        setTerms(event.target.checked);
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleTermsAndConditions}
                        type="checkbox"
                        label={<>Accept <Link to='/terms'>Terms and Conditioins</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!terms}>
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