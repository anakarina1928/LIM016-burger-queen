import { React, useState, useEffect } from "react";
import InputForm from "./input.js";
import { Button, Error } from "./button.js";
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
      setErrMsg("Datos ingresados incorrectos")
    }
  };

  useEffect(() => {
    setErrMsg(null)
  }, [data])
  return (<div className="div-form">
    <form onSubmit={submitHandler}>
      <p className="p-form">Formulario de ingreso</p>
      <InputForm
        type="email"
        placeholder="IngresaTu@correo.com"
        name="email"
        onChange={changeInputsHandler}
      />
      <InputForm
        type="password"
        placeholder="Password"
        name="password"
        onChange={changeInputsHandler}
      />
      { errMsg ? <Error msg={errMsg} /> : null }
      <Button/>
    </form>
    <h1> &lt;BurguerLab/&gt; </h1>
    </div>
  );
}

export default Login;
