import React from 'react';
import products from '../data/products'
import ProductCard from './ProductCard';

const Course = () => {
    return (
        <>
        <section className="course">
            <h6>Courses</h6>
            <h2>Video in Live Action</h2>
            <p>
              Problems trying to resolve the conflict between the two major realms
              of Classical physics: Newtonian mechanics
            </p>

            <div className="product--grid">
                {products.map(product => 
                    <ProductCard 
                        key={product.id}
                        image={product.image}
                        category={product.category}
                        rating={product.rating}
                        title={product.title}
                        description={product.description}
                        sales={product.sales}
                        price={product.price}
                        discountedPrice={product.discountedPrice}
                    />
                )}
            </div>
        </section>
        </>
    )
}
export default Course;