import { React, useState, /*useEffect*/ } from "react";
import InputForm from "./input.js";
import { Button, Error } from "./button.js";
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

  const submitHandler = (e) => {

    e.preventDefault();

    if(!data.email || !data.password){
      return setErrMsg(data.email? 'Ingrese su contraseña' : 'Ingrese su correo')
    }

    return loginWithEmailAndPassword(data.email, data.password)
    
    .then(() => {
      Navigate("/waiterMain");
    }) 
    .catch((error) => {
      const errorCode = error.code
      switch (errorCode) {
        case 'auth/user-not-found':
          setErrMsg('Usuario no registrado')
          break;
        case 'auth/wrong-password':
          setErrMsg('Contraseña inválida')
          break;
        default:
          setErrMsg(`Estamos teniendo dificultades, intente nuevamente`)
      }
    })    
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
        { errMsg ? <Error msg={errMsg} /> : null }
        <Button/>
      </form>
      <h1> &lt;BurgerLab/&gt; </h1>
      </div>
  );
}

export default Login;
