
import React from 'react';
import './login.css';

export function Button () {
  return (

        <button className="button-login" type="submit"> INGRESAR </button>

  );
}

export function Error ({ msg }) {
  return (
    <p className="error"> {msg}</p>
  );
}
