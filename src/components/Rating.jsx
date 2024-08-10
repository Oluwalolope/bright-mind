import React from 'react';


const Rating = (props) => {
  const checkedStar = '/checked-star.svg';
  const uncheckedStar = '/unchecked-star.svg';

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