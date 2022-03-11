import {React, useState} from "react"
import './addSubButton.css'

function AddSubButton ({className}) {
    const [counter, setCounter] = useState(1)
    let increment = () => setCounter(counter + 1)
    let decrement = () => setCounter(counter - 1)

    return(
        <div className={`addSubDiv ${counter<1 && 'addSubDiv--inv'}`}>
         {/* <div className={className}> */}
            <button onClick={decrement} className={`addSubBut red`}>-</button>
            <input type='text' value={counter} className="addSubInp"></input>
            <button onClick={increment} className={`addSubBut green`}>+</button>
        </div>
    )
}

export { AddSubButton }