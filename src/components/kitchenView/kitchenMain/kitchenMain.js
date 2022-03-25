import { React, useState,useEffect } from "react";
import { User } from "../../nameUser/nameUser";
import { NavKitchen } from "../navKitchen/navKitchen";
import { OrderList } from "../../orders/orderList";
import { OrderButtons } from "../../orders/orderButtons";
import { Ticket } from "../../ticket/ticket";
import { onDataOrderChange } from "../../../firebase/firestore";
import { useDocsInRealTime } from "../../../api/api";
import { ButtonOrder } from "../../buttonOpenModal-close/buttonOrder";
import { Modal } from "../../modal/modal";
import { updateOrder } from "../../../firebase/firestore";

const KitchenMain = () => {

  const colorTab = "/kitchenMain"
  const items = useDocsInRealTime(onDataOrderChange('PENDIENTE'));
  const [tableOrderKitchen, setTableOrderKitchen] = useState(undefined);
  //const [table,setTable] =useState();
  const [showModalCompleted, setShowModalCompleted] = useState(false);
  const capturingTableKitchenWithAnEvent = (index) => {
    console.log("pedido: ", items[index], "posicion: ", index);
    setTableOrderKitchen(index);
  }

  const openModal = () => setShowModalCompleted(true);
  const closeModal = () => setShowModalCompleted(false);

  const firebaseCollectionStatusChange = () => openModal();
  
 
  const completed =() =>{
    
    updateOrder(items[tableOrderKitchen].id , {
      state: 'COMPLETADO'
    })
    closeModal();
    
  } 



  return (
    <section className="pendingOrders">
      <User />
      <NavKitchen colorTab={colorTab} />
      <OrderList>
        {items.map((item, index) => {
          return (
            <>
              <OrderButtons
                key={index}
                value={item.data.table}
                text={item.data.table}
                time={item.data.init_time}
                onClick={() => capturingTableKitchenWithAnEvent(index)}
               
              />
         
       
            </>
             
          )
         
        })}
      </OrderList>
      {tableOrderKitchen !== undefined ? <Ticket items={items[tableOrderKitchen].data}  /> : ""}

      <ButtonOrder
        onClick={firebaseCollectionStatusChange}
      />

      {showModalCompleted ? <Modal onClick={completed} closeModalMenu={closeModal} text={`¿El pedido de la mesa x esta listo?`} /> : ''}

    </section>
  )
};

export { KitchenMain };
