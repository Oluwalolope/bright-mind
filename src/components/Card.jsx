import React from 'react';
import card1 from '../assets/laptop-illustration.svg';
import card2 from '../assets/telescope-illustration.svg';
import card3 from '../assets/experiment-illustration.svg';


const Card = (props) => {
    return(
        <div className='card'>
            <img src={props.img}/>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Card;