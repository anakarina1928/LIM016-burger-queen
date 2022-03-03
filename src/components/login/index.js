import {React, useState} from "react"
import InputForm from "./input.js"
import Button from "./button.js"
import { loginWithEmailAndPassword, findingUser, collectionUser } from "../../firebase/auth.js"
//import loginWithEmailAndPassword from "../../firebase/auth"
/*const regex = {
    password: /^.{8,15}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
*/


function Login () {

const [data, setData] = useState({
email: "",
password: ""
})
const onChangeInputs = (e) =>{
  setData({ ...data, 
    [e.target.name] : e.target.value
  })
}
const eventButton = async (e) =>{
    e.preventDefault();
    console.log("datos submit")
    console.log(data.email, data.password)
    let userFirebase = await loginWithEmailAndPassword(data.email, data.password)
    console.log("usuario", userFirebase.user.uid)
    let dataUser = await findingUser(userFirebase.user.uid, collectionUser);
    console.log('que retorna ? : ', dataUser.data());
    
      const userToCreate = {
       nombre: dataUser.data().nombre,
       correo: dataUser.data().correo,
       id: dataUser.data().id
       
     }
     sessionStorage.clear();
     sessionStorage.setItem('user', JSON.stringify(userToCreate));
  }
return(
<form onSubmit={eventButton}>
    <InputForm
    type="email"
    label="correo electronico"
    placeholder="ingresa correo"
    name="email"
    onChange={onChangeInputs}
    />
    <InputForm
    type="password"
    label="contraseña"
    placeholder=""
    name="password"
    onChange={onChangeInputs}
    />
    <Button/>
    </form>
    )
};

export default Login