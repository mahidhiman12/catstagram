import React from 'react';
import './Suggestions.css'; // We'll style this in a separate CSS file
import cat from './images/cat.jpg';
import cat2 from './images/cat2.jpg';
import cat3 from './images/cat3.jpg';
import cat4 from './images/cat4.jpg';
import cat5 from './images/cat5.jpg';
import cat6 from './images/cat6.jpg';
import cat7 from './images/cat7.jpg';



const suggestions = [
  { username: 'john_smith', img: cat },
  { username: 'jane_doe', img: cat2 },
  { username: 'mark_jones', img: cat3 },
  { username: 'mark_jones', img: cat4 },
  { username: 'mark_jones', img: cat5 },
  
 
];

function Suggestions() {
  return (
    <div className="suggestions">
      <h3>Suggested for you</h3>
      {suggestions.map((suggestion) => (
        <div key={suggestion.username} className="suggestion">
          <img src={suggestion.img} alt={suggestion.username} className="suggestion-avatar" />
          <div className="suggestion-info">
            <p className="suggestion-username">{suggestion.username}</p>
            <button className="suggestion-button">Follow</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
