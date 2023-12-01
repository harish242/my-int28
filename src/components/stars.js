import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 0.5;
    return (
      <span key={index}>
        {rating >= starValue ? (
          <FaStar style={{ color: "#febb02" }} />
        ) : rating >= index + 1 ? (
          <FaStarHalfAlt style={{ color: "#febb02" }} />
        ) : (
          <FaRegStar style={{ color: "#febb02" }} />
        )}
      </span>
    );
  });

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
