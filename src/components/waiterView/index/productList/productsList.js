import React from 'react'
import './productsList.css'

const ProductsList = (props) => {
  return (
   <>
      <section className="productsSection">
         <div className="productFlex">
         {props.children}
         </div>
      </section>
   </>
  )
}

export { ProductsList }
