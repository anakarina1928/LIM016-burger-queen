import React from "react";


const Product = (props) => {
    console.log("recibiendo producto: ", props);
    return (
        <button>
            <span>{props.item.name}</span>
        </button>  
    )

}

export { Product }