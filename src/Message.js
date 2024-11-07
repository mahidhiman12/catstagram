import React, { useState } from 'react';
import './Message.css';


import userAvatar from './images/cat.jpg';
import chatPartnerAvatar from './images/cat2.jpg';
import { FaVideo, FaPhoneAlt, FaRegSmile, FaPaperPlane } from 'react-icons/fa';

function Message() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hey, how are you?', sender: 'Cool_cat', time: '10:00 AM' },
    { text: 'I am good, how about you?', sender: 'You', time: '10:01 AM' },
    { text: 'I am doing great!', sender: 'Cool_cat', time: '10:02 AM' },
  ]);

  const [currentChat, setCurrentChat] = useState(null);

  const users = [
    { name: 'Cool_cat', avatar: chatPartnerAvatar },
    { name: 'Funny_cat', avatar: userAvatar },
    { name: 'Lazy_cat', avatar: userAvatar },
  ];

  const handleUserSelect = (user) => {
    setCurrentChat(user);
    setMessages([]); 
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { text: message, sender: 'You', time: new Date().toLocaleTimeString() },
      ]);
      setMessage('');
    }
  };

  const handleEmojiClick = () => {
    
    console.log('Emoji clicked');
  };

  return (
    <div className="message-page">
      <div className="message-layout">
       
        <div className="chat-list">
          <h3>Chats</h3>
          {users.map((user, index) => (
            <div
              key={index}
              className="chat-list-item"
              onClick={() => handleUserSelect(user)}
            >
              <img src={user.avatar} alt="User Avatar" className="user-avatar" />
              <p>{user.name}</p>
            </div>
          ))}
        </div>

        
        <div className="chat-window">
          {!currentChat ? (
            <p>Select a user to start chatting</p>
          ) : (
            <>
              <div className="message-header">
                <button className="back-button" onClick={() => setCurrentChat(null)}>
                  ←
                </button>
                <img src={currentChat.avatar} alt="User Avatar" className="user-avatar" />
                <h2>{currentChat.name}</h2>

                <div className="call-buttons">
                  <FaPhoneAlt className="call-icon" />
                  <FaVideo className="call-icon" />
                </div>
              </div>

              <div className="message-list">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message-item ${msg.sender === 'You' ? 'message-sent' : 'message-received'}`}
                  >
                    {msg.sender !== 'You' && (
                      <img src={chatPartnerAvatar} alt="Avatar" className="message-avatar" />
                    )}
                    <div className="message-content">
                      <p className="message-text">
                        <strong>{msg.sender}</strong>: {msg.text}
                      </p>
                      <span className="message-time">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="message-input">
                <FaRegSmile onClick={handleEmojiClick} className="emoji-icon" />
                <input
                  type="text"
                  value={message}
                  onChange={handleInputChange}
                  placeholder="Type a message..."
                />
                <button onClick={handleSendMessage} className="send-button">
                  <FaPaperPlane className="send-icon" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Message;
