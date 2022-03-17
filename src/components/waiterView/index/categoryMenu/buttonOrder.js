import React from "react";
import './buttonOrder.css'

const ButtonOrder = ({onClick}) => {
  return (
    <>
      <button className="buttonOrder" onClick={onClick} >
      <img src={process.env.PUBLIC_URL + "/icons/checked.png"} alt={"checked"}/>
      </button>
    </>
  );
};

export { ButtonOrder };