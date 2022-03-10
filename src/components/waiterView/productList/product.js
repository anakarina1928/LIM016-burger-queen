import React from "react";
import './product.css'


const Product = (props) => {
    console.log("recibiendo producto: ", props);
    return (
        <button className="product">
            <span>{props.item.name}</span>
            <br></br>
            <br></br>
            <span>S./ {props.item.price}</span>
        </button>  
    )

}

export { Product }

