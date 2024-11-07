import React from 'react';
import { FaHome, FaSearch, FaUserAlt, FaRegHeart, FaTelegramPlane, FaVideo } from 'react-icons/fa';
import './Sidebar.css'; 

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Catstagram</div>
      <div className="sidebar-links">
        <a href="/" className="sidebar-item"><FaHome /> Home</a>
        <a href="/explore" className="sidebar-item"><FaSearch /> Explore</a>
        <a href="/profile" className="sidebar-item"><FaUserAlt /> Profile</a>
        <a href="/notifications" className="sidebar-item"><FaRegHeart /> Notifications</a>
        <a href="/messages" className="sidebar-item"><FaTelegramPlane /> Messages</a>
        <a href="/reels" className="sidebar-item"><FaVideo /> Reels</a>
      </div>
    </div>
  );
}

export default Sidebar;
