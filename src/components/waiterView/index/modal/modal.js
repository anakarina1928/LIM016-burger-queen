import React from 'react';
import ReactDOM from 'react-dom';
import "./modal.css"

const Modal = ({ sendOrderToFireBase, closeModal }) => {

    return ReactDOM.createPortal(

        <section className={'modal-father'}>
            <div className={'container-modal'}>
                <p className='text'>¿enviar pedido a cocina?</p>

                <div className={'button'}>

                    <button onClick={sendOrderToFireBase}> √ </button>
                        {'\n\n\n'}
                    <button onClick={closeModal}>X</button>
                </div>
            </div>
        </section>,
        document.getElementById('modal')
    );
};

export { Modal };