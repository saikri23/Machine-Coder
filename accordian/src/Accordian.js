import React from "react";
import "./Accordian.css";

const Accordian = ({ id, info, title, openId, setOpenId, isOpen }) => {
  const handleToggle = (id) => {
    id === openId ? setOpenId(null) : setOpenId(id);
  };
  return (
    <div className="AccordianItem">
      <div className="AccordianHeader" onClick={() => handleToggle(id)}>
        <h2>{title}</h2>
        <span style={{ cursor: "pointer" }}>
          {isOpen ? <strong>-</strong> : <strong>+</strong>}
        </span>
      </div>
      {isOpen && <div className="AccordianInfo">{info}</div>}
    </div>
  );
};

export default Accordian;
