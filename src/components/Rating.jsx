import React from 'react';
import checkedStar from 'import.meta.env.BASE_URL./src/assets/checked-star.svg';
import uncheckedStar from 'import.meta.env.BASE_URL./src/assets/unchecked-star.svg';


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