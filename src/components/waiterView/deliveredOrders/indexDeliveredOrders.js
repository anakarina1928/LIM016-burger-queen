import { React, useState, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { User } from '../../nameUser/nameUser';
import { WaiterNavBar } from '../sectionTabs/waiterNavBar';
import { OrderList } from '../../orders/orderList';
import { OrderButtons } from '../../orders/orderButtons';
import { Ticket } from '../../ticket/ticket';
import { useDocsInRealTime } from '../../../api/api';
import { onDataOrderChangeByWorker, updateOrder } from '../../../firebase/firestore';
import { ButtonOrderDelivered } from './buttonDelivered';
import { Modal } from '../../modal/modal';
import { SelectAnOrder } from '../../selectItem.js/selectOrder';
import { AuthSession } from '../../../context/context';
import './indexDeliveredOrders.css';

const DeliveredOrders = () => {
  const { user } = useContext(AuthSession);
  const items = useDocsInRealTime(onDataOrderChangeByWorker('COMPLETADO', user.nombre));
  console.log('wooooo', items);
  const [tableOrderKitchen, setTableOrderKitchen] = useState(undefined);
  const capturingTableToDisplayOrderInTable = (index) => setTableOrderKitchen(index);
  const [modalDeleteOrder, setModalDeleteOrder] = useState(false);
  const colorTab = '/waiterDelivered';

  const openModal = () => setModalDeleteOrder(true);
  const closeModal = () => setModalDeleteOrder(false);
  const modalDeleteOrderFirebase = () => {
    if (tableOrderKitchen === undefined) {
      toast.error('NO TIENES PEDIDOS LISTOS', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        type: 'default',
        pading: 30
      });
      return;
    }

    openModal();
  };

  const orderDeleveredModal = () => {
    toast.warn('¡Servicio completado!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      type: 'default',
      pading: 30
    });

    updateOrder(items[tableOrderKitchen].id, {
      state: 'ENTREGADO'
    });

    setTableOrderKitchen(undefined);
    closeModal();
  };

  return (
        <>
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
                                    seconds={item.data.seconds}
                                    onClick={() => capturingTableToDisplayOrderInTable(index)}

                                />
                            </>

                      );
                    })}
                </OrderList>
                {tableOrderKitchen !== undefined ? <Ticket items={items[tableOrderKitchen].data} /> : <SelectAnOrder/>}

                <ButtonOrderDelivered
                    onClick={modalDeleteOrderFirebase}
                    text="ENTREGADO"
                />
                {modalDeleteOrder ? <Modal onClick={orderDeleveredModal} closeModalMenu={closeModal} text={`¿El pedido de la mesa ${items[tableOrderKitchen].data.table} fue entregado?`} /> : ''}
            </section>
            <ToastContainer />
        </>
  );
};

export { DeliveredOrders };
