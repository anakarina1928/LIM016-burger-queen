import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

const Modal = ({ sendOrderToFireBase, closeModal }) => {

    return ReactDOM.createPortal(

        <section className={'modal-father'}>
            <div className={'modal-childdren'}>
                <p>¿confirmaste el pedido del cliente?</p>
                <button onClick={sendOrderToFireBase}>enviar</button>
                <button onClick={closeModal}>X</button>
            </div>
        </section>,
        document.getElementById('modal')
    );
};

export { Modal };