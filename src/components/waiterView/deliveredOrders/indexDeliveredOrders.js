import React from "react";
import { User } from "../../nameUser/nameUser";
import { WaiterNavBar } from "../sectionTabs/waiterNavBar";
import { OrderList } from "../../orders/orderList";
import { OrderButtons } from "../../orders/orderButtons";
import { Ticket } from "../../ticket/ticket";
import "./indexDeliveredOrders.css"

const DeliveredOrders = () => {

    const colorTab = "/waiterDelivered"

    return(
        <section className="deliveredOrders">
            <User/>
            <WaiterNavBar colorTab={colorTab} />
            <OrderList>
                <OrderButtons/>
            </OrderList>
            <Ticket/>
        </section>
    )
}

export { DeliveredOrders }