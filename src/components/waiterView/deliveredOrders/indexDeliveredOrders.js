import React from "react";
import { User } from "../../nameUser/nameUser";
import { WaiterNavBar } from "../sectionTabs/waiterNavBar";
import { OrderList } from "../orders/orderList";
import { OrderButtons } from "../orders/orderButtons";
import { Ticket } from "../ticket/ticket";

const DeliveredOrders = () => {

    //const items = useDocsInRealTime(onDataOrderChange('COMPLETADO')); 

    return(
        <section className="deliveredOrders">
            <User/>
            <WaiterNavBar/>
            <OrderList>
                <OrderButtons/>
            </OrderList>
            <Ticket items={[]}/>
        </section>
    )
}

export { DeliveredOrders }