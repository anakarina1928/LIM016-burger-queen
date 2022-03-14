import { React, useState, useEffect } from "react";
import InputForm from "./input.js";
import { Button, Error } from "./button.js";
import { findingUser, collectionUser } from "../../firebase/firestore";
import { loginWithEmailAndPassword } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import "./login.css";

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
      // const dataUser = await findingUser(userFirebase.user.uid, collectionUser);
      // const userToCreate = {
      //   nombre: dataUser.nombre,
      //   correo: dataUser.correo,
      //   id: dataUser.id,
      // };
      // sessionStorage.clear();
      // sessionStorage.setItem("user", JSON.stringify(userToCreate));
       Navigate("/main");
    } catch (error) {
      setErrMsg("Datos ingresados incorrectos")
    }
  };

  useEffect(() => {
    setErrMsg(null)
  }, [data])

  return (

    <div className="div-form">
      
      <form onSubmit={submitHandler}>
      <p className="p-form">Bienvenidx de vuelta!</p>
        <div className="input-container">
          <InputForm
            label="Correo"
            type="email"
            placeholder="Correo"
            name="email"
            onChange={changeInputsHandler}
          />
          <InputForm
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={changeInputsHandler}
          />
        </div> 
        { errMsg ? <Error msg={errMsg} /> : null }
        <Button/>
      </form>
      <h1> &lt;BurgerLab/&gt; </h1>
      </div>
  );
}

export default Login;
