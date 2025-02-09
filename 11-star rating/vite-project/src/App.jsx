import { useState } from "react";
import "./App.css";
import StarRater from "./components/star-rating";

function App() {
  const [currentRating, setCurrentRating] = useState(3);

  function handleRating(rating) {
    setCurrentRating(rating);
  }

  return (
    <div>
      <h1>Star Rating</h1>
      <StarRater rating={currentRating} onChange={handleRating} size={5} />
      <h3>Current rating: {currentRating}</h3>
    </div>
  );
}

export default App;
