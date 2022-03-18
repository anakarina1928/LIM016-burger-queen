import React from "react";
import { useNavigate } from "react-router-dom";
import "./waiterNavBar.css"

export function WaiterNavBar () {

    const Navigate = useNavigate()

    const viewTab = (event) => {
        const element = event.target
        const elementPath = element.dataset.name
        Navigate(elementPath)
    }

    return (
        <div className="waiterNavBar">
            <div className="waiterFlex">
                <button className="navButton" data-name="/waiterMain" onClick={viewTab}>
                    MENÚ
                </button>
                <button className="navButton" data-name="/waiterPending" onClick={viewTab}>
                    PEDIDOS PENDIENTES
                </button>
                <button className="navButton" data-name="/waiterDelivered" onClick={viewTab}>
                    PEDIDOS ENTREGADOS
                </button>
            </div>
        </div>
    )
}