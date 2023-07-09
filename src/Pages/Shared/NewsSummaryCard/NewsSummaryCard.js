import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaShareNodes, FaStar } from "react-icons/fa6";

const NewsSummaryCard = ({ news }) => {

    const { author, details, image_url, rating, title, total_view, _id
    } = news;
    return (
        <Card className='mb-5 shadow'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image
                        roundedCircle
                        src={author.img}
                        style={{ height: '60px' }}
                    >
                    </Image>
                    <div className='ms-2'>
                        <h6 className='m-0'>{author.name}</h6>
                        <p className='m-0'><small>{author.published_date}</small></p>
                    </div>
                </div>
                <div>
                    <FaBookmark className='me-2'></FaBookmark>
                    <FaShareNodes></FaShareNodes>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200) + '...'} <Link to={`/news/${_id}`}>Read More</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className=" d-flex justify-content-between">
                <div>
                    <p><small><FaStar className='text-warning'></FaStar> {rating?.number}</small></p>
                </div>
                <p><small><FaEye></FaEye> {total_view}</small></p>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;