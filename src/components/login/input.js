import React from 'react'
import './login.css'

function InputForm ({ name, label, placeholder, type, onChange }) {
  return (
    <div className="form-div">
    <label htmlFor={name} className="form-label">{label}</label>
        <input type={type} className="form-input" id={name} placeholder= {placeholder} onChange={onChange} name={name} autoComplete="off">
        </input>
    </div>
  )
}

export default InputForm
