import React from "react";
import { Navigate } from "react-router-dom";
import "./waiterNavBar.css"

export function WaiterNavBar () {

    const onClick = (event) => {
        const element = event.target
        Navigate(`/${element.dataset.name}`)
    }

    return (
        <div className="waiterNavBar">
            <div className="waiterFlex">
                <button className="navButton" data-name="/waiterMain" onClick={onClick}>
                    MENÚ
                </button>
                <button className="navButton" data-name="/waiterPending" onClick={onClick}>
                    PEDIDOS PENDIENTES
                </button>
                <button className="navButton" data-name="/waiterDelivered" onClick={onClick}>
                    PEDIDOS ENTREGADOS
                </button>
            </div>
        </div>
    )
}