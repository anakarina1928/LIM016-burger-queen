import React from "react"
import InputForm from "./login"
import login from "../../firebase/auth"

function Login ({ inputEmail, inputPass }) {
  
  const reg = {
    password: /^.{8}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const isEmail = (text) => {
    return (reg.email.test(text))
  }

  const isPass = (text) => {
    return (reg.password.test(text))
  }

  const validateLogin = async () => {

  }

  return(
    <InputForm
      inputEmail={inputEmail}
      inputPass={inputPass}
    />
    )
};

export default Login