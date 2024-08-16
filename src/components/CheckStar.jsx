import checkedStar from '../assets/checked-star.svg';

const CheckedStar = () => {
    return (
      <span className="star">
        <img src={checkedStar} alt="star icon" />
      </span>
    );
}
 
export default CheckedStar;