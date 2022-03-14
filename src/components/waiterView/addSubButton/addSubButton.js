import {React} from "react"
import './addSubButton.css'

function AddSubButton ({addProduct,subProduct, item, cant}) {
   // const [counter, setCounter] = useState()
    let increment = (item) => {
        
        //setCounter(counter + 1)
        addProduct(item)}

    let decrement = (item) =>{
   // setCounter(counter - 1)
    subProduct(item)
    }
    // if(counter<1){
    //     cambiamos la visibilidad
    // }

    return(
        <div className="addSubDiv">
            <button onClick={()=>decrement(item)} className={`addSubBut red`}>-</button>
            <span type='number' className="addSubInp">{cant}</span>
            <button onClick={() =>increment(item)} className={`addSubBut green`}>+</button>
        </div>
    )
}

export { AddSubButton }