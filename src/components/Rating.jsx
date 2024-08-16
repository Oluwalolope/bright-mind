import React from 'react';
import checkedStar from '../assets/checked-star.svg';
import uncheckedStar from '../assets/unchecked-star.svg';
import CheckedStar from './CheckStar';
import UncheckedStar from './UncheckedStar';


const Rating = (props) => {
  /* Hey future Lope, You tried to create a function
    that automatically renders the amount of stars needed
     depending on the ratings that is passed from the 
     testimonial database. You created a succesful loop 
     that made an array, the only problem is that the loop keeps re-running causing an infinite loop.
     uncomment the code below and see what i am saying
     . Hopefully you are a better dev when you come to visit this problem :) */
     
     // const [ratings, setRatings] = useState([]);
     /* const maxRating = 5;
    const testimonialRating = props.rating;
    
    const newRating = [];
    for (let i = 0; i < maxRating; i++) {
      i < testimonialRating
        ? newRating.push('checked')
        : newRating.push('unchecked');
    }
    setRatings(newRating);
    console.log('From TestimonialCard ', ratings); */

  return (
    <>
      <div className="ratings--grid">
        {props.rating == 5 && (
          <>
            <CheckedStar />
            <CheckedStar />
            <CheckedStar />
            <CheckedStar />
            <CheckedStar />
          </>
        )}
        {props.rating == 4 && (
          <>
            <CheckedStar />
            <CheckedStar />
            <CheckedStar />
            <CheckedStar />
            <UncheckedStar />
          </>
        )}
        {props.rating == 3 && (
          <>
            <CheckedStar />
            <CheckedStar />
            <CheckedStar />
            <UncheckedStar />
            <UncheckedStar />
          </>
        )}
        {props.rating == 2 && (
          <>
            <CheckedStar />
            <CheckedStar />
            <UncheckedStar />
            <UncheckedStar />
            <UncheckedStar />
          </>
        )}
        {props.rating == 1 && (
          <>
            <CheckedStar />
            <UncheckedStar />
            <UncheckedStar />
            <UncheckedStar />
            <UncheckedStar />
          </>
        )}
        {props.rating == 0 && (
          <>
            <UncheckedStar />
            <UncheckedStar />
            <UncheckedStar />
            <UncheckedStar />
            <UncheckedStar />
          </>
        )}
      </div>
    </>
  );
}

export default Rating;