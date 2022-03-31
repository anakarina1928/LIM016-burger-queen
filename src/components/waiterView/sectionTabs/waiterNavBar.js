/* eslint-disable react/prop-types */
import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocsInRealTime } from '../../../api/api';
import { onDataOrderChangeByWorker } from '../../../firebase/firestore';
import { AuthSession } from '../../../context/context';
import './waiterNavBar.css';

export function WaiterNavBar (props) {
  const { user } = useContext(AuthSession);
  const Navigate = useNavigate();

  const viewTab = (event) => {
    const element = event.target;
    const elementPath = element.dataset.name;
    Navigate(elementPath);
  };

  const readyNum = useDocsInRealTime(onDataOrderChangeByWorker('COMPLETADO', user.nombre)).length;
  const pendingNum = useDocsInRealTime(onDataOrderChangeByWorker('PENDIENTE', user.nombre)).length;

  return (
        <div className="waiterNavBar">
            <button className={`navButton ${props.colorTab === '/waiterMain' && 'active'}`} data-name="/waiterMain" onClick={viewTab}>
                MENÚ
            </button>
            <button className={`navButton ${props.colorTab === '/waiterPending' && 'active'}`} data-name="/waiterPending" onClick={viewTab}>
                PEDIDOS PENDIENTES {pendingNum}
            </button>
            <button className={`navButton ${props.colorTab === '/waiterDelivered' && 'active'}`} data-name="/waiterDelivered" onClick={viewTab}>
                PEDIDOS LISTOS {readyNum}
            </button>
        </div>
  );
}
