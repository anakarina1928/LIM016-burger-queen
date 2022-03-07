import { React, useState, useEffect } from "react";
import InputForm from "./input.js";
import { Button, Error } from "./button.js";
import { findingUser, collectionUser } from "../../firebase/firestore";
import { loginWithEmailAndPassword } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { AddSubButton } from "../waiterView/addSubButton/addSubButton"
import { CheckTable } from "../waiterView/checkTable/checkTable"

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

  const [errMsg, setErrMsg] = useState(null)
  const changeInputsHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if(!data.email || !data.password) setErrMsg(data.email? 'Email' : 'Password')
      //chequear que no esten vacios
      const userFirebase = await loginWithEmailAndPassword(
        data.email,
        data.password
      );
      const dataUser = await findingUser(userFirebase.user.uid, collectionUser);
      console.log("que retorna ? : ", dataUser.data());
      const userToCreate = {
        nombre: dataUser.data().nombre,
        correo: dataUser.data().correo,
        id: dataUser.data().id,
      };
      sessionStorage.clear();
      sessionStorage.setItem("user", JSON.stringify(userToCreate));
      Navigate("/main");
    } catch (error) {
      setErrMsg(JSON.stringify(error))
    }
  };

  useEffect(() => {
    setErrMsg(null)
  }, [data])
  return (
    <form onSubmit={submitHandler}>
      <InputForm
        type="email"
        label="correo electronico"
        placeholder="ingresa correo"
        name="email"
        onChange={changeInputsHandler}
      />
      <InputForm
        type="password"
        label="contraseña"
        placeholder=""
        name="password"
        onChange={changeInputsHandler}
      />
      { errMsg ? <Error msg={errMsg} /> : null }
      <Button />
    </form>
  );
}

export default Login;
