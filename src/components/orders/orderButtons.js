import React from "react";

const OrderButtons = ({className, value, text, onClick, time}) => {


    return (
        <button className={className} value={value} onClick={onClick}>
           MESA # {text}
            <br></br>
          {time}
        </button>
    )
}

export { OrderButtons }