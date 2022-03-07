import React from "react";

const Button = ({ className, text, onClick, value}) => {/*este boton lo puedo reutilizar las veces que desee, 
le paso la clase, el evento y el texto que quiero que lleve*/
  return (
    <>
      <button className={className}  onClick={onClick} value={value}>
        {text}
      </button>
    </>
  );
};

export { Button };
