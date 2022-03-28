import React, { useEffect, useState } from 'react';
import './App.css';
import Login from '../src/components/login/index.js';
import { MenuForAllMeals } from '../src/components/waiterView/index/indexWaiterView';
import { PendingOrders } from './components/waiterView/pendingOrders/indexPendingOrders'
import { DeliveredOrders } from './components/waiterView/deliveredOrders/indexDeliveredOrders';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { KitchenMain } from './components/kitchenView/kitchenMain/kitchenMain';
import { KitchenDelivered } from './components/kitchenView/kitchenDelivered/kitchenDelivered';
// import image from './images/hamburguesa.svg'
import { Holis } from './context/context';
import { onAuth } from './firebase/auth';
import { verifyUserAuthenticated } from './firebase/auth';
import { useAuth } from './firebase/auth';

export function App() {
  
  const user = useAuth() //Custom hook de manejo de autenticacion
  const Navigate = useNavigate()

  useEffect(() => {
    
    if(!user.authenticated && !user.isLoading){
      Navigate("/")
    }else{
      if (user.cargo === "MESERO") {
        Navigate("/waiterMain")
      } else if (user.cargo === "JEFE DE COCINA") {
        Navigate("/kitchenMain");
      }
    }
    //else para navegar a la pantalla del usuario cocina o mesero
  }, [user])
  // const [isLoading, setIsLoading] = useState(true)
  
  // useEffect(() => {
  //   const fetchUserAuthenticated = async() => {
  //     const userData = await verifyUserAuthenticated()
  //     console.log("userData", userData)

  //     setUser(userData)

  //   }
  //   fetchUserAuthenticated()
  // }, [])

  // useEffect(() => {
  //   setIsLoading(false)
  // }, [user])

  // useEffect(() => {
  //   const callback = (user) => {
  //     console.log("useEffect user",user)
  //     setUser(user)
  //   }
  //   onAuth(callback)
  // }, [])
  
  return (
  <Holis.Provider value={{user}}>
    <div className="app">
      {!user.isLoading ? 
      <Routes>
        <Route path= "/" element= {<Login/>}/>
        <Route path= "/waiterMain" element= {<MenuForAllMeals/>}/>
        <Route path= "/waiterPending" element= {<PendingOrders/>}/>
        <Route path= "/waiterDelivered" element= {<DeliveredOrders/>}/>
        <Route path= "/kitchenMain" element= {<KitchenMain/>}/>
        <Route path= "/kitchenDelivered" element= {<KitchenDelivered/>}/>
      </Routes>
      : ""/*aca puede ir el loader?*/}  
    </div>
    </Holis.Provider>
  );
  
}

export default App;