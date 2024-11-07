// Stories.js
import React from 'react';
import './Stories.css'; 
import { FaUserAlt } from 'react-icons/fa';
import cat from './images/cat.jpg';
import cat2 from './images/cat2.jpg';
import cat3 from './images/cat3.jpg';
import cat4 from './images/cat4.jpg';
import cat5 from './images/cat5.jpg';
import cat6 from './images/cat6.jpg';
import cat7 from './images/cat7.jpg';


function Stories() {
  const users = [
    { username: 'mark_pink', img: cat },
    { username: 'john_doe', img: cat2 },
    { username: 'jane_doe', img: cat3 },
    { username: 'jane_doe', img: cat4 },
    { username: 'jane_doe', img: cat5 },
    { username: 'jane_doe', img: cat6 },
    { username: 'jane_doe', img: cat7 },
   
    // Add more here
  ];

  return (
    <div className="stories">
      {users.map((user) => (
        <div key={user.username} className="story">
          <img src={user.img} alt={user.username} className="story-avatar" />
          <p className="story-username">{user.username}</p>
        </div>
      ))}
    </div>
  );
}

export default Stories;
