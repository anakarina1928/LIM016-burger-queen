import React from "react";
import './buttonOrder.css'

const ButtonOrder = ({ text, onClick  }) => {/*este boton lo puedo reutilizar las veces que desee, 
le paso la clase, el evento y el texto que quiero que lleve*/

  return (
    <>
      <button className="buttonOrder" onClick={onClick} >
        
        {text}
      </button>
    </>
  );
};

export { ButtonOrder };