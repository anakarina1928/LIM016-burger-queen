import React from "react";
import './buttonOrder.css'


const ButtonOrder = ({ onClick , resetButton}) => {

  return (
    <>
      <section className="component-father">
        <div className= 'component-flex'>
          <button className="buttonOrder" onClick={onClick}>
            <img src={process.env.PUBLIC_URL + "/icons/checked.png"} alt={"checked"} />
          </button>
          <button className="buttonOrder" onClick={resetButton}>
            <img  className="margin"src={process.env.PUBLIC_URL + "/icons/tachito.png"} alt={"checked"} />
          </button>
        </div>
      </section>
    
    </>
  );
};

export { ButtonOrder };