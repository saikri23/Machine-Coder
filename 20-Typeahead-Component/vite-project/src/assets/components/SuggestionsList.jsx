import React from "react";
import "./styles.css";

const SuggestionsList = ({
  dataKey,
  suggestions,
  highlight,
  onSuggestionClick,
  selectedIndex,
}) => {
  const getHighlightedText = (suggestion, highlight) => {
    const parts = suggestion.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <React.Fragment>
      {suggestions.map((suggestion, index) => {
        const currSuggestion = dataKey ? suggestion[dataKey] : suggestion;

        return (
          <li
            key={index}
            id={`suggestion-${index}`}
            onClick={() => onSuggestionClick(suggestion)}
            className="suggestion-item"
            role="option"
            // aria-selected={selectedIndex === index}
          >
            {getHighlightedText(currSuggestion, highlight)}
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default SuggestionsList;
