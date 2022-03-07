import { React, useState } from "react";
import InputForm from "./input.js";
import {Button, Error} from "./button.js";
import { findingUser, collectionUser } from "../../firebase/firestore";
import { loginWithEmailAndPassword } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import "./login.css";

/*const regex = {
    password: /^.{8,15}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };
*/

function Login() {
  let Navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const onChangeInputs = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const eventButton = async (e) => {
    e.preventDefault();
    try {
      let userFirebase = await loginWithEmailAndPassword(
        data.email,
        data.password
      );
      let dataUser = await findingUser(userFirebase.user.uid, collectionUser);
      if (dataUser.exists()) {
        console.log("que retorna ? : ", dataUser.data());
        const userToCreate = {
          nombre: dataUser.data().nombre,
          correo: dataUser.data().correo,
          id: dataUser.data().id,
        };
        sessionStorage.clear();
        sessionStorage.setItem("user", JSON.stringify(userToCreate));
        Navigate("/main");
      }
    } catch (error) {
     
    }
  };
  return (
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
      <Error/>
      <Button />
    </form>
  );
}

export default Login;
