import React from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { BsCart } from 'react-icons/bs';
import { IoEye } from 'react-icons/io5';
import { FiDownload } from 'react-icons/fi';


const ProductCard = (props) => {
    const productImage = {
      backgroundImage: `url(import.meta.env.BASE_URL${props.image})`,
    };

    return(
        <>
        <div className="product--card">
            <div className="product--visuals" style={productImage}>
                <p className="sale">Sale</p>
                <div className="product--cta">
                    <a href="#" className="product--btn">
                        <FaRegHeart />
                    </a>
                    <a href="#" className="product--btn">
                        <BsCart />
                    </a>
                    <a href="#" className="product--btn">
                        <IoEye />
                    </a>
                </div>
            </div>

            <div className="product--details">
                <div className="product--category">
                    <p>{props.category}</p>
                    <div className="product--rating">
                        <img src="./src/assets/checked-star.svg" alt="star icon" />
                        <span>{props.rating}</span>
                    </div>
                </div>

                <h5>{props.title}</h5>
                <p>{props.description}</p>

                <div className="product--sales">
                    <FiDownload />
                    <h6>{props.sales} Sales</h6>
                </div>

                <div className="product--price">
                    <h6 className="price">{props.price}</h6>
                    <h6 className="discounted-price">{props.discountedPrice}</h6>
                </div>

                <a href="#" className="product--inquiry">Learn More</a>

            </div>
        </div>
        </>
    )
}

export default ProductCard;