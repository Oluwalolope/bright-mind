import React from 'react';

const Card = (props) => {
    const img = `import.meta.env.BASE_URL${props.img}`;
    return(
        <div className='card'>
            <img src={img}/>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Card;