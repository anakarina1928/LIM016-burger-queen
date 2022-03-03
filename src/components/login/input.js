import React from "react"

function InputForm ({name, label, placeholder, type, onChange}){
    return (
    <div>
    <label htmlFor={name} className="form-label">{label}</label>
        <input type={type} className="form-input" id={name} placeholder= {placeholder} onChange={onChange} name={name}>
        </input>
    </div>
)}

export default InputForm