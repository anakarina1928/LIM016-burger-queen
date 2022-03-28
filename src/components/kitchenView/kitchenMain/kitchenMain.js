import { React, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { User } from '../../nameUser/nameUser'
import { NavKitchen } from '../navKitchen/navKitchen'
import { OrderList } from '../../orders/orderList'
import { OrderButtons } from '../../orders/orderButtons'
import { Ticket } from '../../ticket/ticket'
import { onDataOrderChange, updateOrder } from '../../../firebase/firestore'
import { useDocsInRealTime } from '../../../api/api'
import { ButtonOrder } from '../../buttonOpenModal-close/buttonOrder'
import { Modal } from '../../modal/modal'

const KitchenMain = () => {
  const colorTab = '/kitchenMain'
  const items = useDocsInRealTime(onDataOrderChange('PENDIENTE'))
  const [tableOrderKitchen, setTableOrderKitchen] = useState(undefined)
  // const [table,setTable] =useState();
  const [showModalCompleted, setShowModalCompleted] = useState(false)
  const capturingTableKitchenWithAnEvent = (index) => {
    console.log('pedido: ', items[index], 'posicion: ', index)
    setTableOrderKitchen(index)
  }

  const openModal = () => setShowModalCompleted(true)
  const closeModal = () => setShowModalCompleted(false)

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
      })
      return
    }

    openModal()
  }

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
    })

    updateOrder(items[tableOrderKitchen].id, {
      state: 'COMPLETADO'
    })
    closeModal()
  }

  return (
    <>
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
        {tableOrderKitchen !== undefined ? <Ticket items={items[tableOrderKitchen].data} /> : ''}

        <ButtonOrder
          onClick={firebaseCollectionStatusChange}
        />

        {showModalCompleted ? <Modal onClick={completed} closeModalMenu={closeModal} text={'¿El pedido de la mesa x esta listo?'} /> : ''}

      </section>
      <ToastContainer />
    </>
  )
}

export { KitchenMain }
