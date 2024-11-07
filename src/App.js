

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Feed from './Feed';
import Explore from './Explore';
import Profile from './Profile';  
import Notification from './Notification';
import Sidebar from './Sidebar';
import Message from './Message'; 
import Reels from './Reels'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar /> 
        <div className="content">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />  
            <Route path="/notifications" element={<Notification />} />  
            <Route path="/messages" element={<Message />} />  
            <Route path="/reels" element={<Reels />} />  
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

