import React from "react";
import { User } from "../../nameUser/nameUser";
import { WaiterNavBar } from "../sectionTabs/waiterNavBar";
import { OrderList } from "../../orders/orderList";
import { OrderButtons } from "../../orders/orderButtons";
import { Ticket } from "../../ticket/ticket";
import "./indexDeliveredOrders.css"

const DeliveredOrders = () => {
    return(
        <section className="deliveredOrders">
            <User/>
            <WaiterNavBar/>
            <OrderList>
                <OrderButtons/>
            </OrderList>
            <Ticket/>
        </section>
    )
}

export { DeliveredOrders }