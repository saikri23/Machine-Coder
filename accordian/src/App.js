import { useState } from "react";
import Accordian from "./Accordian";
import "./App.css";
import "./Accordian.css";
import questions from "./data";

function App() {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="accordian">
      {questions.map((item) => (
        <Accordian
          key={item.id}
          {...item}
          openId={openId}
          setOpenId={setOpenId}
          isOpen={openId===item.id}
        />
      ))}
    </div>
  );
}

export default App;
