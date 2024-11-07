import React, { useState } from 'react';
import './CommentSection.css';

function CommentSection({ postId }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // Handle comment input change
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  // Add comment to the list
  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]); 
      setComment(''); 
    }
  };

  return (
    <div className="comment-section">
      <div className="comment-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <strong>username:</strong> {comment} 
          </div>
        ))}
      </div>

      <div className="comment-input">
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Post</button>
      </div>
    </div>
  );
}

export default CommentSection;
