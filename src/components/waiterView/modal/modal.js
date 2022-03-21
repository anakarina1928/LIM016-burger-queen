import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'

const Modal = ({ sendOrderToFireBase, closeModal }) => {

    return ReactDOM.createPortal(

        <section className={'modal-father'}>
            <div className={'container-modal'}>
                <p className='text'>¿enviar pedido a cocina?</p>

                <div className={'button'}>

                    <button className="button-modal" onClick={sendOrderToFireBase}>
                        <img src={process.env.PUBLIC_URL + "/icons/tick.png"}/>
                    </button>
                   
                    <button className="button-modal close" onClick={closeModal}>
                        <img  src={process.env.PUBLIC_URL + "/icons/close.png"}/>
                    </button>
                </div>
            </div>
        </section>,
        document.getElementById('modal')
    );
};

export { Modal };