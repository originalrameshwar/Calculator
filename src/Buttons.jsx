import React from "react";

const Buttons = ({ val,onClick, }) => {
  const st = {
    textAlign: "center",
    border: 0,
    outline: 0,
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    boxShadow:
      "-1px -1px 5px rgba(255, 255, 255, 1),1px 1px 5px rgba(255, 255, 255, 1)",
    margin: "10px",
    cursor: "pointer",
  };
  return (
    <>
      <button className="font-bold" onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0fef0",e.target.style.color = 'black')} 
            onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent", e.target.style.color = 'white')} onClick={onClick} style={st} >{val}</button>
    </>
  );
};

export default Buttons;


