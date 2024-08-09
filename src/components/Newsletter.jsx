import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();//stops page from refreshing on submit
        const newsletterEmail = { email };
    }

    return (
        <section className="newsletter">
            <h6>Newsletter</h6>
            <h3>Our Experts Teacher</h3>
            <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>

            
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" id="email" 
                    placeholder='Your Email'
                    required 
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <input 
                    type="submit" 
                    value="Subscribe" 
                />
            </form>        
        </section>
    )
};
export default Newsletter;