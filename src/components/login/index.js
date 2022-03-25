import { React, useState, useContext /*useEffect*/ } from "react";
import InputForm from "./input.js";
import { Button, Error } from "./button.js";
import { loginWithEmailAndPassword } from "../../firebase/auth";
import { findingUser, collectionUser } from "../../firebase/firestore.js";
import { useNavigate } from "react-router-dom";
import "./login.css";
import {Holis} from "../../context/context"

function Login() {
  let Navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState(null);

  const changeInputsHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // const {setUser} = useContext(Holis)
  // const {setUid} = useContext(Holis)

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (!data.email || !data.password) {
        return setErrMsg(
          data.email ? "Ingrese su contraseña" : "Ingrese su correo"
        );
      }
      const userFirebase = await loginWithEmailAndPassword(
        data.email,
        data.password
      );

      const dataUser = await findingUser(userFirebase.user.uid, collectionUser);
        // setUser(dataUser)
        // setUid(userFirebase.user.uid)
      
      const userToCreate = {
        nombre: dataUser.nombre,
        correo: dataUser.correo,
        cargo: dataUser.cargo,
      };
      sessionStorage.clear();
      sessionStorage.setItem("user", JSON.stringify(userToCreate));
      if (userToCreate.cargo === "MESERO") {
        setTimeout(()=>{ Navigate("/waiterMain")})
      } else if (userToCreate.cargo === "JEFE DE COCINA") {
        Navigate("/kitchenMain");
      }
    } catch (error) {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/user-not-found":
          setErrMsg("Usuario no registrado");
          break;
        case "auth/wrong-password":
          setErrMsg("Contraseña inválida");
          break;
        default:
          setErrMsg(`Estamos teniendo dificultades, intente nuevamente`);
      }
    }
  };

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
        {errMsg ? <Error msg={errMsg} /> : null}
        <Button />
      </form>
      <h1> &lt;BurgerLab/&gt; </h1>
    </div>
  );
}

export default Login;
