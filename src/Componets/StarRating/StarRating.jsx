import React from 'react';

const StarRating = ({ rating }) => {
  const MAX_STARS = 5;

  const renderStars = () => {
    const filledStars = Math.round(rating);
    const emptyStars = MAX_STARS - filledStars;

    return (
      <>
        {'⭐'.repeat(filledStars)}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
