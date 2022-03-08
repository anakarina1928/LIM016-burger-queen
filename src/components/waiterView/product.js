import React from "react";


const Product = (props ) => {
    console.log("recibiendo producto: ", props);
    return (
        <>
            <span>{props.item.name}</span>;
            <br></br>
        </>     
    )

}

export { Product };