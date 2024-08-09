import React from 'react';
import checkedStar from '/src/assets/checked-star.svg';
import uncheckedStar from '/src/assets/unchecked-star.svg';


const Rating = (props) => {

    return (
      <>
        <div className="ratings--grid">
          <span className="star">
            <img src={ checkedStar} alt="star icon" />
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