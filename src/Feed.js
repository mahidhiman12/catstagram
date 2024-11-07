
import React from 'react';
import Post from './Post';
import Stories from './Stories';
import Suggestions from './Suggestions'; 
import cat from './images/cat.jpg';
import cat2 from './images/cat2.jpg';
import cat3 from './images/cat3.jpg';

function Feed() {
  return (
    <div className="feed-container">
     <div className="feed">
      
      <Stories />
        <Post
          username="mahi_dhiman"
          caption="Feeling the React vibes! 🌟"
          imageUrl={cat}
        />
        <Post
          username="john_doe"
          caption="Just another day coding!"
          imageUrl={cat2}
        />
        <Post
          username="jane_doe"
          caption="Chillin’ with my cat 🐱"
          imageUrl={cat3}
        />
      </div>
      <Suggestions /> 
     
    </div>
  );
}

export default Feed;
