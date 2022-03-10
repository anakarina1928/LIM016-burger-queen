import React from "react";
import './product.css'
//import { filterMenuData} from '../../../api/api.js'

const Product = ( props) => {
    
   /* const valueOnClick = (event) => {
        //Prevenimos el comportamiento por defecto del button
        event.preventDefault();
        const newMenu = filterMenuData(event.target.value);
      //Notificamos al componente padre una actualizacion de estado
        setProduct(newMenu);
    }*/

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

export { Product };