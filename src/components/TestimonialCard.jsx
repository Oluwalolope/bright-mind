import React from 'react';
import Avatar from './Avatar';
import Rating from './Rating';


const TestimonialCard = (props) => {
    return (
        <>
            <div className="testimonial--card">
                <Avatar src={props.src} />
                <p>{props.remark}</p>
                <Rating rating={props.rating}/>
                <h5>{props.author}</h5>
                <h6>{props.occupation}</h6>
            </div>
        </>
    )
}

export default TestimonialCard;