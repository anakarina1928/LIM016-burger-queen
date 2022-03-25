import React from 'react';
import ReactDOM from 'react-dom';
import "./modal.css"

const Modal = ({ onClick, closeModalMenu, text, }) => {

    return ReactDOM.createPortal(

        <section className={'modal-father'}>
            <div className={'container-modal'}>
                <p className='text'>{text}</p>

                <div className={'button'}>

                    <button className="button-modal" onClick={onClick}>
                        <img src={process.env.PUBLIC_URL + "/icons/tick.png"} alt='accept'/>
                    </button>
                   
                    <button className="button-modal close" onClick={closeModalMenu}>
                        <img  src={process.env.PUBLIC_URL + "/icons/close.png"} alt='close' />
                    </button>
                </div>
            </div>
        </section>,
        document.getElementById('modal')
    );
};

export { Modal };