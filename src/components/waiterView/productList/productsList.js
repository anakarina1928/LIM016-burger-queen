import React from "react";
import './productsList.css'

const ProductsList = (props) =>{
   return(
   <>
      <section className="productsSection">
         {props.children}
      </section>
   </>
   )
}


export {ProductsList}

