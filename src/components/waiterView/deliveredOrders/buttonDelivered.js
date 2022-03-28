import React from 'react';
import './buttonDelivered.css';

const ButtonOrderDelivered = ({ onClick }) => {
  return (

      <section className="component-father-DerDelivered">
        <div className= 'component-flex-DerDelivered'>
          <button className="buttonOrder-DerDelivered" onClick={onClick}>
            <img src={process.env.PUBLIC_URL + '/icons/checked.png'} alt={'checked'} />
             ENTREGADO
          </button>
        </div>
      </section>

  );
};

export { ButtonOrderDelivered };
