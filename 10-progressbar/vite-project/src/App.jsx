import { useEffect, useState, useRef } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setValue((prv) => prv + 1);   // This also works but this is better way
  //   }, 100);
  // }, []);

  const intervalRef = useRef(null); // Store interval ID

  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Start a new interval
    intervalRef.current = setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);

    // Cleanup interval when component unmounts
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="app">
      <h2>Progress Bar</h2>
      <ProgressBar value={value} />
    </div>
  );
}

export default App;
