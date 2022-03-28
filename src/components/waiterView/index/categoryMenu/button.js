import React from 'react'
import './button.css'

const Button = ({ className, text, onClick, value, src, alt }) => { /* este boton lo puedo reutilizar las veces que desee,
le paso la clase, el evento y el texto que quiero que lleve */
  return (
    <>
      <button className={className} onClick={onClick} value={value}>
        <img src={process.env.PUBLIC_URL + src} alt={alt}/>
        <br/>
        {text}
      </button>
    </>
  )
}

export { Button }
