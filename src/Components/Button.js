import React from "react";

const Button = ({ handleClick, text }) => {
  return <div onClick={handleClick}>{text}</div>;
};

export default Button;
