import { React, useState, useEffect } from "react";
import { auth } from "../../firebase/auth.js";
import { findingUser, collectionUser } from "../../firebase/firestore";
import {ButtonClose} from "./buttonClose"
import {logOut} from "../../firebase/auth.js";
import { useNavigate } from "react-router-dom";
import "./nameUser.css"
//import { contenido } from "../../context/context.js";
import { useContext } from "react";
import { Holis } from "../../context/context.js";





export function User(){
    const [userName, setUserName] = useState("");
    const [userCargo, setUserCargo] = useState("");
    const Navigate = useNavigate()
     let {user} =useContext(Holis)
     console.log(user.nombre, "servira???????")

  
   
  
      useEffect(() => {    
        const userId = auth.currentUser.uid;
        findingUser(userId, collectionUser).then((res) =>
            setUserName(res.nombre)
            )
      }, [])

     useEffect(() => {    
        const userId = auth.currentUser.uid;
        findingUser(userId, collectionUser).then((res) =>
            setUserCargo(res.cargo)
        )
      }, [])
      
      const logOutSesion=()=>{
        logOut(auth).then(()=>{
          Navigate("/")
          sessionStorage.clear();
        }).catch((error) => {
          console.log(error);
        });
      }
    return(
        <div className="navUser">
          <div className="navFlex">
    <p className="dataUser">{userName}</p>
    <p className="dataUser">{userCargo}</p>
    <ButtonClose className="btnLogOut" src={'/icons/stand-by.png'} onClick={logOutSesion}  alt="cerrar sesion" />
    </div>
    </div>
  )
}