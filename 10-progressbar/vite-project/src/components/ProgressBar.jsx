import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const ProgressBar = ({ value = 0 }) => {
  const [percentage, setPercentage] = useState(value);
  const MAX = 100,
    MIN = 0;

  useEffect(() => {
    setPercentage(Math.min(Math.max(value, MIN), MAX));
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: value >= 49 ? "white" : "black" }}>
        {percentage.toFixed()}%
      </span>
      <div 
        // style={{ width: `${percentage}%` }}//This is not the optimised way 
        style={{transform:`scaleX(${percentage/MAX})`,transformOrigin:"left"}}//expects value between 0 to 1
      />
    </div>
  );
};

export default ProgressBar;
