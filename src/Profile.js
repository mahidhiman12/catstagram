
import React, { useState } from 'react';
import './Profile.css';


import post1 from './images/cat.jpg';
import post2 from './images/cat2.jpg';
import post3 from './images/cat3.jpg';
import post4 from './images/cat5.jpg';

function Profile() {
  
  const [activeTab, setActiveTab] = useState('posts');

  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  
  const followers = 2500;
  const following = 180;
  const postsCount = 3;

  return (
    <div className="profile">
      
      <div className="profile-header">
        <img src={post4} alt="Profile" className="profile-pic" />
        <div className="profile-info">
          <h2>Cool_cat</h2>
          <h3>Laddu</h3>
          <p className="bio">I am purrfect. What about you?</p>

          
          <div className="profile-stats">
            <span className="stat">
              <strong>{postsCount}</strong> Posts
            </span>
            <span className="stat">
              <strong>{followers}</strong> Followers
            </span>
            <span className="stat">
              <strong>{following}</strong> Following
            </span>
          </div>

          <button className="edit-profile">Edit Profile</button>
        </div>
      </div>

      
      <div className="profile-tabs">
        <div 
          className={`tab ${activeTab === 'posts' ? 'active-tab' : ''}`} 
          onClick={() => handleTabClick('posts')}
        >
          Posts
        </div>
        <div 
          className={`tab ${activeTab === 'saved' ? 'active-tab' : ''}`} 
          onClick={() => handleTabClick('saved')}
        >
          Saved
        </div>
        <div 
          className={`tab ${activeTab === 'tagged' ? 'active-tab' : ''}`} 
          onClick={() => handleTabClick('tagged')}
        >
          Tagged
        </div>
      </div>

     
      {activeTab === 'posts' && (
        <div className="profile-posts">
          <img src={post1} alt="Post 1" className="profile-post" />
          <img src={post2} alt="Post 2" className="profile-post" />
          <img src={post3} alt="Post 3" className="profile-post" />
        </div>
      )}

     
      {activeTab === 'saved' && (
        <div className="profile-posts">
          <p>No saved posts yet.</p>
        </div>
      )}

     
      {activeTab === 'tagged' && (
        <div className="profile-posts">
          <p>No posts tagged yet.</p>
        </div>
      )}
    </div>
  );
}

export default Profile;
