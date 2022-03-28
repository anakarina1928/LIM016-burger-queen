import { React } from 'react';
import './addSubButton.css';

function AddSubButton ({ addProduct, subProduct, item, cant }) {
  // const [counter, setCounter] = useState()
  const increment = (item) => {
    // setCounter(counter + 1)
    addProduct(item);
  };

  const decrement = (item) => {
    // setCounter(counter - 1)
    subProduct(item);
  };
  // if(counter<1){
  //     cambiamos la visibilidad
  // }

  return (
        // <div className="addSubGrid">
        <div className="addSubDiv">
            <button onClick={() => decrement(item)} className={'addSubBut red'}>-</button>
            <span className="addSubSpan">{cant}</span>
            <button onClick={() => increment(item)} className={'addSubBut green'}>+</button>
        </div>
        // </div>
  );
}

export { AddSubButton };
