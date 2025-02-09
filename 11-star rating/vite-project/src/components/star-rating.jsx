import { useState } from "react";

// eslint-disable-next-line react/prop-types
const StarRater = ({ rating = 0, onChange = () => {}, size = 0 }) => {
  const [hoverRating, setHoverRating] = useState(rating);

  const handleMouseHover = (val) => {
    setHoverRating(val);
  };
  return (
    <div className="star-rating">
      {Array(size)
        .fill("")
        .map((_, idx) => {
          let starVal = idx + 1;
          let starClass = "star";
          // Here hover is given more priority 
          if (hoverRating >= starVal) {
            starClass += " hover";
          } else if (rating >= starVal) {
            starClass += " active";
          }

          return (
            <span
              key={starVal}
              className={starClass}
              onMouseEnter={() => handleMouseHover(starVal)}
              onMouseLeave={() => handleMouseHover(0)}
              onClick={() => onChange(starVal)}
            >
              {" "}
              &#9733;
            </span>
          );
        })}
    </div>
  );
};

export default StarRater;
