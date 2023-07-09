import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaMedium, FaWhatsapp } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCurosel from '../BrandCurosel/BrandCurosel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const RightSideNav = () => {
    const googleProvider = new GoogleAuthProvider();
    const { providerLogin, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location?.state?.from.pathname || '/';

    const handleGoogleSignin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error('error', error);
            })
    }

    return (
        <div>
            {
                user?.uid ? <></> :
                    <ButtonGroup vertical>
                        <Button onClick={handleGoogleSignin} variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                        <Button variant="outline-dark" className='mt-1'> <FaGithub></FaGithub> Login with Github</Button>
                    </ButtonGroup>
            }
            <div className='mt-4'>
                <p className='my-3'>Find us on:</p>
                <ListGroup>
                    <ListGroup.Item className='mb-3'> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaMedium /> Medium</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> <FaWhatsapp /> WhatsApp</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCurosel></BrandCurosel>
            </div>
        </div>
    );
};

export default RightSideNav;