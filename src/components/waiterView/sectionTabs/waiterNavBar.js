import React from "react";
import "./waiterNavBar.css"

const WaiterNavBar = () => {
    return (
        <div className="waiterNavBar">
            <div className="waiterFlex">
            <button className="navButton">MENÚ</button>
            <button className="navButton">PEDIDOS PENDIENTES</button>
            <button className="navButton">PEDIDOS ENTREGADOS</button>
            </div>
        </div>
    )
}

export { WaiterNavBar }