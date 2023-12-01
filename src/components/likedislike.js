import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/likedislike.css'; // Create a CSS file for styling

const LikeDislikeToggle = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <div className="like-dislike-toggle">
      <i onClick={toggleLike} className={`icon ${isLiked ? 'liked' : ''}`}>
        {isLiked ? <FaHeart /> : <FaRegHeart />}
      </i>
    </div>
  );
};

export default LikeDislikeToggle;
