import {React }from "react";
import { useNavigate } from "react-router-dom";

export function NavKitchen (props) {//Data de firebase
    const Navigate = useNavigate()

    const viewTab = (event) => {
        const element = event.target
        const elementPath = element.dataset.name
        Navigate(elementPath)
    }

    return (
        
        <div className="waiterNavBar">
            {/* <div className="waiterFlex"> */}
            <button className={`navButton ${props.colorTab === "/kitchenMain" && 'active'}`} data-name="/kitchenMain" onClick={viewTab}>
                PEDIDOS PENDIENTES
            </button>
            <button className={`navButton ${props.colorTab === "/kitchenDelivered" && 'active'}`} data-name="/kitchenDelivered" onClick={viewTab}>
                PEDIDOS LISTOS
            </button>
            {/* </div> */}
        </div>
    )
}
