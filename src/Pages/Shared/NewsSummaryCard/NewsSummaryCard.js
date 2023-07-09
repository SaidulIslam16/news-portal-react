import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaBookmark, FaShareNodes } from "react-icons/fa6";

const NewsSummaryCard = ({ news }) => {

    const { author, details, image_url, rating, title, total_view, _id
    } = news;
    return (
        <Card className='mb-5'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        src={author.img}
                        style={{ height: '60px' }}
                    >
                    </Image>
                    <div className='ms-2'>
                        <h6>{author.name}</h6>
                        <p><small>{author.published_date}</small></p>
                    </div>
                </div>
                <div>
                    <FaBookmark></FaBookmark>
                    <FaShareNodes></FaShareNodes>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 200) + '...'} <Link to={`news/${_id}`}>Read More</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div>
                    <p><small>{rating.number} {rating.badge}</small></p>
                </div>
                <p><small>{total_view}</small></p>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;