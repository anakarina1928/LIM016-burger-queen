import { React, useState, useEffect } from "react";

const OrderButtons = ({value, onClick, text, item}) => {

    let minutes = Math.floor((Date.now()/1000-item.data.init_time)/60)
    const [timer, setTimer] = useState(minutes)

    useEffect(() => {
        setTimeout(() => setTimer(timer+1), 60000)
    }, [timer])

    return (
        <button className="product marginButton" value={value} onClick={onClick}>
            MESA # {text}
            <br></br>
            {timer} minutos
        </button>
    )
}

export { OrderButtons }
