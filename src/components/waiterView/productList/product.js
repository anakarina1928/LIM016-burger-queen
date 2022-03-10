import React from "react";
import './product.css'


const Product = ({item, onClick}) => {
// const Product = ({onClick, props}) => {

    // console.log("recibiendo producto: ", props);
    return (
        <button 
        className="product"
        onClick={onClick}
        >
            <span>{item.name}</span>
            <br></br>
            <br></br>
            <span>S./ {item.price}</span>
        </button>  
    )

}

export { Product }