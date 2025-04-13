import React, { useEffect, useState, useRef } from "react";
import SuggestionsList from "./SuggestionsList";
import "./styles.css";

const AutoComplete = ({
  placeholder = "",
  fetchSuggestions = () => {},
  dataKey = "name",
  customloading,
  onSelect,
  caching = true,
}) => {
  const [inputVal, setInputVal] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const cache = useRef({});
  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const getSuggestion = async (query) => {
    setIsLoading(true);
    if (cache.current[query]) {
      setSuggestions(cache.current[query]);
    } else {
      try {
        const result = await fetchSuggestions(query);
        setSuggestions(result);
        cache.current[query] = result;
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const debounce = (fn, d) => {
    let id;
    return function (...args) {
      if (id) clearTimeout(id);
      id = setTimeout(() => {
        fn(...args);
      }, d);
    };
  };

  const debouncedGetSuggestions = useRef(debounce(getSuggestion, 300)).current;

  useEffect(() => {
    if (inputVal) debouncedGetSuggestions(inputVal);
  }, [inputVal]);

  const handleSuggestionClick = (e) => {
    console.log(e);
  };

  return (
    <div className="autoComplete-cont">
      <input
        type="text"
        value={inputVal}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="autocomplete-input"
      />
      {(suggestions.length > 0 || isLoading || error) && (
        <ul
          id="suggestions-list"
          className="suggestions-list"
          role="listbox"
          // ref={suggestionsListRef}
        >
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">{customloading}</div>}

          <SuggestionsList
            dataKey={dataKey}
            suggestions={suggestions}
            highlight={inputVal}
            onSuggestionClick={handleSuggestionClick}
            // selectedIndex={selectedIndex}
          />
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
