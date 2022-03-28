import React from 'react'
import './product.css'

const Product = (props) => {
// const Product = ({onClick, props}) => {

  // console.log("recibiendo producto: ", props);
  return (
        <button className="product" onClick={props.onClick} data-name={props.item.name} >
            <span>{props.item.name}{'\n'} <br></br> S./ {props.item.price}</span>
        </button>
  )
}

export { Product }
