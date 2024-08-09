import React from 'react';
import Card from './Card';
import cards from '../data/cards';

const Main = () => {
  return (
    <main>
      <div className="hero-section">
        <div className="hero-box">
          <h5>Online Training</h5>
          <h1>25k+ students trust us</h1>
          <h4>Our goal is to make online education work for everyone</h4>
          <div className="call-to-actions">
           <a href="#" className="cta-btn">Get Quote Now</a>
           <a href="#">Learn More</a>
          </div>
        </div>

        <div className='hero-box'>
          <img src="./src/assets/hero-illustration.jpg" alt="a woman smiling" />
        </div>
      </div>

      <div className="card--grid">
        {cards.map(card => 
          <Card 
            key={card.id}
            img={card.img}
            title={card.title}
            content={card.content}
          />
        )}
      </div>
    </main>
  );
};

export default Main;