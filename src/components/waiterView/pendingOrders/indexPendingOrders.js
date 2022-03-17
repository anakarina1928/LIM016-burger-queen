import React from "react";
import { User } from '../../nameUser/nameUser'
import { WaiterNavBar } from "../sectionTabs/waiterNavBar";
import { OrderList } from "../orders/orderList";
import { OrderButtons } from "../orders/orderButtons";
import { Ticket } from '../ticket/ticket'

const PendingOrders = () => {
    return (
        <section className="pendingOrders">
            <User/>
            <WaiterNavBar/>
            <OrderList>
                <OrderButtons/>
            </OrderList>
            <Ticket/>
        </section>
    )
}

export { PendingOrders }
