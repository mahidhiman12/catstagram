

import React from 'react';
import CommentSection from './CommentSection'; 
import cat from './images/cat.jpg';
import cat2 from './images/cat2.jpg';
import cat3 from './images/cat3.jpg';

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <h3>{username}</h3>
      <img src={imageUrl || cat} alt="Post" />
      <p><strong>{username}</strong> {caption}</p>

    
      <CommentSection postId={username} />
    </div>
  );
}

export default Post;
