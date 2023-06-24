import React from 'react';
import StarIcon from '@mui/icons-material/Star';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          sx={{ color: index < rating ? '#ffc107' : 'gray' }}
          className="star-icon"
        />
      ))}
    </div>
  );
};

export default StarRating;
