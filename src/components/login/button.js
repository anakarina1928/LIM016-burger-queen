
import React from "react"

export function Button (){
    
    return(
        
        <button type="submit">
            INGRESAR 
        </button>
    
    )
}



export function Error({msg}){
    return(
    <p className="error">Datos ingresados no son validos, falta: {msg}</p>
    )
}