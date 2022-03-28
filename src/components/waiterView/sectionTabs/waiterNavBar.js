/* eslint-disable react/prop-types */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './waiterNavBar.css'

export function WaiterNavBar (props) {
  const Navigate = useNavigate()

  const viewTab = (event) => {
    const element = event.target
    const elementPath = element.dataset.name
    Navigate(elementPath)
  }

  return (
        <div className="waiterNavBar">
            <button className={`navButton ${props.colorTab === '/waiterMain' && 'active'}`} data-name="/waiterMain" onClick={viewTab}>
                MENÚ
            </button>
            <button className={`navButton ${props.colorTab === '/waiterPending' && 'active'}`} data-name="/waiterPending" onClick={viewTab}>
                PEDIDOS PENDIENTES
            </button>
            <button className={`navButton ${props.colorTab === '/waiterDelivered' && 'active'}`} data-name="/waiterDelivered" onClick={viewTab}>
                PEDIDOS LISTOS
            </button>
        </div>
  )
}
