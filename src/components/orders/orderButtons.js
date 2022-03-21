import React from "react";

const OrderButtons = ({ value, text, onClick, time }) => {


    return (
        <button className="product marginButton" value={value} onClick={onClick}>
            MESA # {text}
            <br></br>
            {time}
        </button>
    )
}

export { OrderButtons }