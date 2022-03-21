import './App.css';
import Login from '../src/components/login/index.js';
import { MenuForAllMeals } from '../src/components/waiterView/index/indexWaiterView';
import { PendingOrders } from './components/waiterView/pendingOrders/indexPendingOrders'
import { DeliveredOrders } from './components/waiterView/deliveredOrders/indexDeliveredOrders';
import { Route, Routes } from 'react-router-dom';
import { KitchenMain } from './components/kitchenView/kitchenMain/kitchenMain';
import { KitchenDelivered } from './components/kitchenView/kitchenDelivered/kitchenDelivered';
// import image from './images/hamburguesa.svg'



export function App() {
  return (
    <div className="app">
      <Routes>
        <Route path= "/" element= {<Login/>}/>
        <Route path= "/waiterMain" element= {<MenuForAllMeals/>}/>
        <Route path= "/waiterPending" element= {<PendingOrders/>}/>
        <Route path= "/waiterDelivered" element= {<DeliveredOrders/>}/>
        <Route path= "/kitchenMain" element= {<KitchenMain/>}/>
        <Route path= "/kitchenDelivered" element= {<KitchenDelivered/>}/>
      </Routes>
    </div>
  );
}

export default App;
