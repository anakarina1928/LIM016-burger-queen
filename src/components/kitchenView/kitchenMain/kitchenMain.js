import { React, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { User } from '../../nameUser/nameUser';
import { NavKitchen } from '../navKitchen/navKitchen';
import { OrderList } from '../../orders/orderList';
import { OrderButtonsTimer } from '../../orders/orderButtonTimer';
import { Ticket } from '../../ticket/ticket';
import { onDataOrderChange, updateOrder } from '../../../firebase/firestore';
import { useDocsInRealTime/*, useOrderTime */ } from '../../../api/api';
// import { ButtonOrder } from '../../buttonOpenModal-close/buttonOrder';
import { ButtonOrderDelivered } from '../../waiterView/deliveredOrders/buttonDelivered';
import { Modal } from '../../modal/modal';

import { SelectAnOrder } from '../../selectItem.js/selectOrder';

const KitchenMain = () => {
  const colorTab = '/kitchenMain';
  const items = useDocsInRealTime(onDataOrderChange('PENDIENTE'));
  const [tableOrderKitchen, setTableOrderKitchen] = useState(undefined);
  const [showModalCompleted, setShowModalCompleted] = useState(false);
  // const [timer, setTimer] = useState(0)

  const capturingTableKitchenWithAnEvent = (index) => {
    // const minutes = ((Date.now()/1000)-items[index].data.init_time)/60
    // console.log(Math.floor(minutes))
    setTableOrderKitchen(index);
  };

  // const timerUpdate = (date) => {
  //   const minutes = Math.floor(((Date.now()/1000)-date)/60)
  //   return(minutes)
  // }

  const openModal = () => setShowModalCompleted(true);
  const closeModal = () => setShowModalCompleted(false);

  const firebaseCollectionStatusChange = () => {
    if (tableOrderKitchen === undefined) {
      toast.error('selecciona algun pedido', {
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

  const completed = () => {
    toast.warn('¡La orden se envio a pedidos listos!', {
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
      state: 'COMPLETADO'
    });
    setTableOrderKitchen(undefined);
    closeModal();
  };

  return (
    <>
      <section className="pendingOrders">
        <User />
        <NavKitchen colorTab={colorTab} />
        <OrderList>
          {items.map((item, index) => {
            console.log(item.data.seconds);
            return (
              <>
                <OrderButtonsTimer
                  key={item.data.init_time}
                  value={item.data.table}
                  text={item.data.table}
                  seconds={item.data.seconds}
                  time={item.data.init_time}
                  onClick={() => capturingTableKitchenWithAnEvent(index)}
                />

              </>

            );
          })}
        </OrderList>
        {tableOrderKitchen !== undefined ? <Ticket items={items[tableOrderKitchen].data} /> : <SelectAnOrder/>}

        <ButtonOrderDelivered
          onClick={firebaseCollectionStatusChange}
          text="LISTO"
        />

        {showModalCompleted ? <Modal onClick={completed} closeModalMenu={closeModal} text={`¿El pedido de la mesa ${items[tableOrderKitchen].data.table} esta listo?`} /> : ''}

      </section>
      <ToastContainer />
    </>
  );
};

export { KitchenMain };
