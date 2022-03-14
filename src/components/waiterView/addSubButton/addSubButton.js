import {React, useState} from "react"
import './addSubButton.css'

function AddSubButton ({addProduct, item}) {
    const [counter, setCounter] = useState(0)
    let increment = (item) => {
        
        setCounter(counter + 1)
        addProduct(item)}

    let decrement = () => setCounter(counter - 1)

    return(
        <div className="addSubDiv">
         {/* <div className={className}> */}
            <button onClick={decrement} className={`addSubBut red`}>-</button>
            <input type='text' value={counter} className="addSubInp"></input>
            <button onClick={() =>increment(item)} className={`addSubBut green`}>+</button>
        </div>
    )
}

export { AddSubButton }