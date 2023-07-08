import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img_1 from '../../../assets/brands/01.jpg';
import img_2 from '../../../assets/brands/02.png'

const BrandCurosel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img_1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img_2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCurosel;