import { React, useState, useContext } from 'react';
import { User } from '../../nameUser/nameUser';
import { WaiterNavBar } from '../sectionTabs/waiterNavBar';
// import { OrderList } from "../orders/orderList";
import { useDocsInRealTime } from '../../../api/api';
import { onDataOrderChangeByWorker } from '../../../firebase/firestore';
// import { ProductsList } from "../index/productList/productsList";
import { OrderList } from '../../orders/orderList';
import { OrderButtons } from '../../orders/orderButtons';
import { Ticket } from '../../ticket/ticket';
import { AuthSession } from '../../../context/context';
import { SelectAnOrder } from '../../selectItem.js/selectOrder';
import './indexPendingOrders.css';

const PendingOrders = () => {
  const { user } = useContext(AuthSession);
  const items = useDocsInRealTime(onDataOrderChangeByWorker('PENDIENTE', user.nombre));
  const [tableOrder, setTableOrder] = useState(undefined);
  const colorTab = '/waiterPending';

  const capturingTableWithAnEvent = (index) => {
    console.log('pedido: ', items[index], 'posicion: ', index);
    setTableOrder(index);
  };

  return (
        <section className="pendingOrders">
            <User />
            <WaiterNavBar colorTab={colorTab} />
            <OrderList>
                {items.map((item, index) => {
                  return (
                     <>
                        <OrderButtons
                            key={index}
                            value={item.data.table}
                            text={item.data.table}
                            time={item.data.init_time}
                            onClick={() => capturingTableWithAnEvent(index)}

                        />

                    </>
                  );
                })}
            </OrderList>
            { tableOrder !== undefined ? <Ticket items={items[tableOrder].data}/> : <SelectAnOrder/> }

        </section>
  );
};

export { PendingOrders };
