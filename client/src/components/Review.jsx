import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

// Star component to represent full, half, or empty stars
const Star = ({ type }) => {
  let Icon = FaRegStar; // Default to empty star
  if (type === 'full') {
    Icon = FaStar;
  } else if (type === 'half') {
    Icon = FaStarHalfAlt;
  }
  return <Icon className="w-6 h-6 text-yellow-500" />;
};

// Star rating display based on a numeric rating
const StarRatingDisplay = ({ rating, maxRating = 5 }) => {
  // Generate stars based on the rating
  const stars = [];
  let fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = (rating % 1) >= 0.5; // Check if there's a half-star

  // Add full stars to the list
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} type="full" />);
  }

  // Add a half-star if applicable
  if (hasHalfStar) {
    stars.push(<Star key="half" type="half" />);
    fullStars++;
  }

  // Add empty stars to complete the rating
  while (stars.length < maxRating) {
    stars.push(<Star key={`empty-${fullStars}`} type="empty" />);
    fullStars++;
  }

  return <div className="flex space-x-1">{stars}</div>;
};

// Component to demonstrate how to display a rating on an item
const ItemWithRating = ({ itemName, itemRating }) => {
  return (
    <div className="flex flex-col items-start p-4 bg-white shadow-md rounded-lg">
      <StarRatingDisplay rating={itemRating} />
    </div>
  );
};

// Example Usage: Displaying an item with a specific star rating
const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ItemWithRating itemName="Sample Item" itemRating={3.5} />
    </div>
  );
};

export default App;
