import React from 'react';

const checkedStar = './src/assets/checked-star.svg';
const uncheckedStar = './src/assets/unchecked-star.svg';


const Rating = (props) => {

    return (
      <>
        <div className="ratings--grid">
          <span className="star">
            <img src={checkedStar} alt="star icon" />
          </span>
          <span className="star">
            <img src={checkedStar} alt="star icon" />
          </span>
          <span className="star">
            <img src={checkedStar} alt="star icon" />
          </span>
          <span className="star">
            <img src={checkedStar} alt="star icon" />
          </span>
          <span className="star">
            <img src={uncheckedStar} alt="star icon" />
          </span>
        </div>
      </>
    );
}

export default Rating;