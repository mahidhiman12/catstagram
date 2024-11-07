import React from 'react';
import './Reels.css';  

import reel1 from './images/catvid.mp4';  
import reel2 from './images/catvid2.mp4';  
import reel3 from './images/catvid3.mp4';  

function Reels() {
  return (
    <div className="reels-page">
      <div className="reels-container">
        <div className="reel">
          <video className="reel-video" src={reel1} controls loop />
          <div className="reel-controls">
            <button className="reel-btn like-btn"><i className="fas fa-heart"></i></button>
            <button className="reel-btn comment-btn"><i className="fas fa-comment"></i></button>
            <button className="reel-btn share-btn"><i className="fas fa-share-alt"></i></button>
            <button className="reel-btn save-btn"><i className="fas fa-bookmark"></i></button> 
          </div>
        </div>

        <div className="reel">
          <video className="reel-video" src={reel2} controls loop />
          <div className="reel-controls">
            <button className="reel-btn like-btn"><i className="fas fa-heart"></i></button>
            <button className="reel-btn comment-btn"><i className="fas fa-comment"></i></button>
            <button className="reel-btn share-btn"><i className="fas fa-share-alt"></i></button>
            <button className="reel-btn save-btn"><i className="fas fa-bookmark"></i></button> 
          </div>
        </div>

        <div className="reel">
          <video className="reel-video" src={reel3} controls loop />
          <div className="reel-controls">
            <button className="reel-btn like-btn"><i className="fas fa-heart"></i></button>
            <button className="reel-btn comment-btn"><i className="fas fa-comment"></i></button>
            <button className="reel-btn share-btn"><i className="fas fa-share-alt"></i></button>
            <button className="reel-btn save-btn"><i className="fas fa-bookmark"></i></button> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reels;
