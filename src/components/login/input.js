import React from "react"

function InputForm ({name, label, placeholder, type}){
    return (
        <div>
        <label htmlFor={name} className="form-label">{label}</label>
            <input type={type} className="form-input" id={name} placeholder= {placeholder}>
            </input>
        </div>
    )
}

export default InputForm