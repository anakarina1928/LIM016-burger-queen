import { React, useState,useContext } from "react";
import { User } from '../../nameUser/nameUser'
import { WaiterNavBar } from "../sectionTabs/waiterNavBar";
//import { OrderList } from "../orders/orderList";
import { useDocsInRealTime } from "../../../api/api";
import { onDataOrderChangeByWorker } from "../../../firebase/firestore";
//import { ProductsList } from "../index/productList/productsList";
import { OrderList } from "../../orders/orderList";
import { OrderButtonsTimer } from "../../../components/orders/orderButtonTimer"
import { Ticket } from '../../ticket/ticket';
import { Holis } from "../../../context/context";
import { SelectAnOrder } from "../../selectItem.js/selectOrder";
import "./indexPendingOrders.css"

const PendingOrders = () => {

    
    const {user}=useContext(Holis);
    const items = useDocsInRealTime(onDataOrderChangeByWorker('PENDIENTE', user.nombre));
    const [tableOrder, setTableOrder] = useState(undefined);
    const colorTab = "/waiterPending"


    const capturingTableWithAnEvent = (index) => {
        console.log("pedido: ", items[index], "posicion: ", index);
        setTableOrder(index);
    }

    
    return (
        <section className="pendingOrders">
            <User />
            <WaiterNavBar  colorTab={colorTab} />
            <OrderList>
                {items.map((item, index) => {
                    return (
                     <>
                        <OrderButtonsTimer
                            key={item.data.init_time}
                            value={item.data.table}
                            text={item.data.table}
                            time={item.data.init_time}
                            seconds={item.data.seconds}
                            onClick={()=> capturingTableWithAnEvent(index)}
                          
                        />                        
                      
                    </>
                    )
                })}
            </OrderList>
            {  tableOrder !== undefined ? <Ticket items={items[tableOrder].data}/> : <SelectAnOrder/> }


        </section>
    )
}

export { PendingOrders }
