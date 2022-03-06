import {React, useState} from "react"

function AddSubButton () {
    const [counter, setCounter] = useState(1)
    let increment = () => setCounter(counter + 1)
    let decrement = () => setCounter(counter - 1)

    // if(counter<1){
    //     cambiamos la visibilidad
    // }

    return(
        <div style={{visibility: counter<1 ? 'hidden' : 'visible'}}>
            <button onClick={decrement}>-</button>
            <input type='number' min="0" value={counter}></input>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default AddSubButton