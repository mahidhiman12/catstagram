
import React, { useState } from 'react';
import './Explore.css';


import cat from './images/cat.jpg';
import cat2 from './images/cat2.jpg';
import cat3 from './images/cat3.jpg';
import cat4 from './images/cat4.jpg';
import cat5 from './images/cat5.jpg';
import cat6 from './images/cat6.jpg';
import cat7 from './images/cat7.jpg';

function Explore() {
  // Example like and comment counts
  const likes = [120, 150, 98, 200, 75, 85, 220];
  const comments = [10, 25, 8, 30, 5, 15, 40];

  const images = [cat, cat2, cat3, cat4, cat5, cat6, cat7];

  return (
    <div className="explore">
      <div className="explore-grid">
        {images.map((image, index) => (
          <div className="explore-item-container" key={index}>
            <div className="image-container">
              <img src={image} alt={`Post ${index + 1}`} className="explore-item" />
              <div className="overlay">
                <div className="overlay-content">
                  <span>{likes[index]} Likes</span>
                  <span>{comments[index]} Comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
