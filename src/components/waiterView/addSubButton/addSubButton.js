import {React, useState} from "react"
import './addSubButton.css'

function AddSubButton () {
    const [counter, setCounter] = useState(1)
    let increment = () => setCounter(counter + 1)
    let decrement = () => setCounter(counter - 1)

    // if(counter<1){
    //     cambiamos la visibilidad
    // }

    return(
        <div className={`addSubDiv ${counter<1 && 'addSubDiv--inv'}`}>
            <button onClick={decrement} className={`addSubBut red`}>-</button>
            <input type='text' value={counter} className="addSubInp"></input>
            <button onClick={increment} className={`addSubBut green`}>+</button>
        </div>
    )
}

export { AddSubButton }