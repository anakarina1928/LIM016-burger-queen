import React from "react";
import './buttonOrder.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ButtonOrder = ({ productSelect, openModal, resetButton }) => {

  const confirmOrder = (productSelect) => {

    if (productSelect.length === 0) {
      toast.warn("¡Orden vacía!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        type: "default",
        pading: 30
      });

    } else {
      openModal();
    }

  };



  return (
    <>
      <section className="component-father">
        <div className= 'component-flex'>
          <button className="buttonOrder" onClick={() => confirmOrder(productSelect)}>
            <img src={process.env.PUBLIC_URL + "/icons/checked.png"} alt={"checked"} />
          </button>
          <button className="buttonOrder" onClick={resetButton}>
            <img src={process.env.PUBLIC_URL + "/icons/tachito.png"} alt={"checked"} />
          </button>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export { ButtonOrder };