import { React, useState } from "react";
import { User } from '../../nameUser/nameUser'
import { WaiterNavBar } from "../sectionTabs/waiterNavBar";
//import { OrderList } from "../orders/orderList";
import { useDocsInRealTime } from "../../../api/api";
import { onDataOrderChange } from "../../../firebase/firestore";
//import { ProductsList } from "../index/productList/productsList";
import { OrderList } from "../../orders/orderList";
import { OrderButtons } from "../../orders/orderButtons";
import { Ticket } from '../../ticket/ticket'
import "./indexPendingOrders.css"

const PendingOrders = () => {

    const items = useDocsInRealTime(onDataOrderChange('PENDIENTE'));
    const [tableOrder, setTableOrder] = useState(undefined);
    const colorTab = "/waiterPending"


    const capturingTableWithAnEvent = (index) => {
        console.log("pedido: ", items[index], "posicion: ", index);
        setTableOrder(index);
    }

    // {items.length > 0 ? <Ticket items={items[0].data.order}/> : ""}
    return (
        <section className="pendingOrders">
            <User />
            <WaiterNavBar  colorTab={colorTab} />
            <OrderList>
                {items.map((item, index) => {
                    return (
                     <>
                        <OrderButtons
                            key={index}
                            value={item.data.table}
                            text={item.data.table}
                            time={item.data.init_time}
                            onClick={()=> capturingTableWithAnEvent(index)}
                          

                        />                        
                      {/*(item.length > 0 && tableOrder===items.data.table) ? <Ticket items={item[index].data.order}/> : ""*/}
                    </>
                    )
                })}
            </OrderList>
            {  tableOrder !== undefined ? <Ticket items={items[tableOrder].data.order}/> : ""  }


        </section>
    )
}

export { PendingOrders }
