import React from 'react';
import TestimonialCard from './TestimonialCard';
import testimonials from '../data/testimonials';
import testimonial1 from '../assets/testimonial-profile-1.png';
import testimonial2 from '../assets/testimonial-profile-2.png';



const Testimonial = () => {
    return (
      <section className="testimonial">
        <h6>Testimonials</h6>
        <h2>Our Popular Courses</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>

        <div className="testimonial--grid">
            {testimonials.map(testimonial => 
              <TestimonialCard
                key={testimonial.id}
                remark={testimonial.remark}
                rating={testimonial.rating}
                src={testimonial.profileImage}
                author={testimonial.author}
                occupation={testimonial.occupation}
              />
            )}
        </div>
      </section>
    );
}

export default Testimonial;