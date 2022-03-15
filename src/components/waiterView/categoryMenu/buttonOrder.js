import React from "react";
import './buttonOrder.css'

const ButtonOrder = ({ text, onClick  }) => {
  return (
    <>
      <button className="buttonOrder" onClick={onClick} >
        
        {text}
      </button>
    </>
  );
};

export { ButtonOrder };