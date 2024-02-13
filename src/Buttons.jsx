import React from "react";

const Buttons = ({ val,onClick }) => {
  const st = {
    textAlign: "center",
    border: 0,
    outline: 0,
    width: "60px",
    height: "60px",
    borderRadius: "10px",
    boxShadow:
      "-8px -8px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(255, 255, 255, 0.1)",
    margin: "10px",
    cursor: "pointer",
    backgroundColor: "#3a4452",
  };
  return (
    <>
      <button onClick={onClick} style={st} >{val}</button>
    </>
  );
};

export default Buttons;


