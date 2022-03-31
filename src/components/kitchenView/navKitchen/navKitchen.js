import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDocsInRealTime } from '../../../api/api';
import { onDataOrderChange } from '../../../firebase/firestore';
import { AuthSession } from '../../../context/context';

export function NavKitchen (props) { // Data de firebase
  const { user } = useContext(AuthSession);
  const Navigate = useNavigate();

  const viewTab = (event) => {
    const element = event.target;
    const elementPath = element.dataset.name;
    Navigate(elementPath);
  };

  const readyNum = useDocsInRealTime(onDataOrderChange('COMPLETADO', user.nombre)).length;
  const pendingNum = useDocsInRealTime(onDataOrderChange('PENDIENTE', user.nombre)).length;

  return (

        <div className="waiterNavBar">

          <button className={`navButton ${props.colorTab === '/kitchenMain' && 'active'}`} data-name="/kitchenMain" onClick={viewTab}>
              {/* PEDIDOS PENDIENTES {pendingNum} */}
              PEDIDOS PENDIENTES {pendingNum > 0 && <span className='roundCounter'>{pendingNum}</span>}
          </button>
          <button className={`navButton ${props.colorTab === '/kitchenDelivered' && 'active'}`} data-name="/kitchenDelivered" onClick={viewTab}>
              PEDIDOS LISTOS {readyNum > 0 && <span className='roundCounter'>{readyNum}</span>}
          </button>

        </div>
  );
}
