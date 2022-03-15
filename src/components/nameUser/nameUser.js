import {React, useState, useEffect} from "react";
import { auth } from "../../firebase/auth.js";
import { findingUser, collectionUser } from "../../firebase/firestore";
import "./nameUser.css"



export function User(){
    const [userName, setUserName] = useState("");
    const [userCargo, setUserCargo] = useState("");

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
    return(
        <div className="navUser">
    <p className="dataUser">{userName}</p>
    <p className="dataUser">{userCargo}</p>
    </div>
    )
}