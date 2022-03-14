import './App.css';
import Login from '../src/components/login/index.js';
import {MenuForAllMeals} from '../src/components/waiterView/indexWaiterView';
import { auth, onAuthStateChanged } from './firebase/auth';
import { Route, Routes } from 'react-router-dom';
// import image from './images/hamburguesa.svg'



export function App() {
  return (
    <div className="app">
      <Routes>
        <Route path= "/" element= {<Login/>}/>
        <Route path= "/main" element= {<MenuForAllMeals/>}/>
      </Routes>
    </div>
  );
}

export default App;
