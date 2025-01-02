import { useState } from "react";
import Accordian from "./Accordian";
import "./App.css";
import "./Accordian.css";
import questions from "./data";

function App() {
  const [openId, setOpenId] = useState([]);
  const handleToggle = (id) => {
    setOpenId((pvs) =>
      openId.includes(id)
        ? openId.filter((item) => item !== id)
        : [...openId, id]
    );
  };
  return (
    <div className="accordian">
      {questions.map((item) => (
        <Accordian
          key={item.id}
          {...item}
          // isOpen={openId===item.id}
          isOpen={openId.includes(item.id)}
          // handleToggle={() =>
          //   openId === item.id ? setOpenId(null) : setOpenId(item.id)
          // }
          handleToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}

export default App;
