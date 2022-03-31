import React from 'react';

const OrderButtons = ({ value, text, onClick, time }) => {
  const vibration = window.navigator.vibrate([200, 100, 200]);
  return (
        <button className="product marginButton" value={value} onClick={onClick}>
            <p className="tableMarginBottom">MESA # {text}</p>
            <p>{time}{vibration}</p>
        </button>
  );
};

export { OrderButtons };
