import React from "react";
import './productsList.css'

const Products = (props) =>{
   return(
   <>
      <section className="productsSection">
         {props.children}
      </section>
   </>
   )
}

export {Products}