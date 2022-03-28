import { React, useContext } from 'react'
import { auth, logOut } from '../../firebase/auth.js'
import { ButtonClose } from './buttonClose'

import { useNavigate } from 'react-router-dom'
import './nameUser.css'

import { AuthSession } from '../../context/context.js'

export function User () {
  const Navigate = useNavigate()
  const { user } = useContext(AuthSession)
  console.log('user', user)

  const logOutSesion = () => {
    logOut(auth)
      .then(() => {
        Navigate('/')
        sessionStorage.clear()
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="navUser">
      <div className="navFlex">
        <p className="dataUser">{user.nombre}</p>
        <p className="dataUser">{user.cargo}</p>
        <ButtonClose
          className="btnLogOut"
          src={'/icons/stand-by.png'}
          onClick={logOutSesion}
          alt="cerrar sesion"
        />
      </div>
    </div>
  )
}
