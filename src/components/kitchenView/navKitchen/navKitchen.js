import {React }from "react";
import { useNavigate } from "react-router-dom";

export function NavKitchen () {//Data de firebase
    const Navigate = useNavigate()

    const viewTab = (event) => {
        const element = event.target
        const elementPath = element.dataset.name
        Navigate(elementPath)
    }

    return (
        
        <div className="waiterNavBar">
            <div className="waiterFlex">
                <button className="navButton" data-name="/kitchenMain" onClick={viewTab}>
                    PEDIDOS PENDIENTES
                </button>
                <button className="navButton" data-name="/kitchenPending" onClick={viewTab}>
                    PEDIDOS ENVIADOS
                </button>
            </div>
        </div>
    )
}
