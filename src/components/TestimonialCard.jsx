import React from 'react';
import Avatar from './Avatar';
import Rating from './Rating';
import testimonial1 from '../assets/testimonial-profile-1.png';
import testimonial2 from '../assets/testimonial-profile-2.png';


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