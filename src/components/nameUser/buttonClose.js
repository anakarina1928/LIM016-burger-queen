import React from 'react'
import '../waiterView/index/categoryMenu/button.css'

//
const ButtonClose = ({ className, onClick, src, alt }) => { /* este boton lo puedo reutilizar las veces que desee,
le paso la clase, el evento y el texto que quiero que lleve */
  return (
    <>
      <button className={className} onClick={onClick}>
      <img src={process.env.PUBLIC_URL + src} alt={alt}/>
      </button>
    </>
  )
}

export { ButtonClose }
