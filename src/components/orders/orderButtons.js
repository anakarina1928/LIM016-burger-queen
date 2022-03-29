import React from "react";

const OrderButtons = ({ value, text, onClick, time }) => {


    return (
        <button className="product marginButton" value={value} onClick={onClick}>
            <p className="tableMarginBottom">MESA # {text}</p>
            <p>{time}</p>
        </button>
    )
}

export { OrderButtons }