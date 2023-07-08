import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaMedium, FaWhatsapp } from "react-icons/fa6";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCurosel from '../BrandCurosel/BrandCurosel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark" className='mt-1'> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
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