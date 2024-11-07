import React from 'react';
import './Notification.css';


import post1 from './images/cat.jpg';
import post2 from './images/cat2.jpg';
import post3 from './images/cat3.jpg';
import post4 from './images/cat4.jpg';
import post5 from './images/cat5.jpg';
import post6 from './images/cat6.jpg';

function Notification() {
  return (
    <div className="notification-page">
      <div className="notification-header">
        <h2>Notifications</h2>
      </div>

      <div className="notification-list">
        
        <div className="notification-item">
          <img src={post4} alt="User" className="user-avatar" />
          <div className="notification-details">
            <p><strong>Lovely_cat</strong> liked your post</p>
            
          </div>
        </div>

        
        <div className="notification-item">
          <img src={post5} alt="User" className="user-avatar" />
          <div className="notification-details">
            <p><strong>Funny_cat</strong> started following you</p>
          
          </div>
        </div>

       
        <div className="notification-item">
          <img src={post6} alt="User" className="user-avatar" />
          <div className="notification-details">
            <p><strong>Lazy_cat</strong> commented on your post</p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
