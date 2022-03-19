import React from "react";
import './buttonOrder.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ButtonOrder = ({productSelect, openModal}) => {

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
        pading:30
      });

    } else{
      openModal();
    }
      
};        
 
  return (
    <div className="buttonOrderDiv">
      <button className="buttonOrder" onClick={() => confirmOrder(productSelect)}>
      <img src={process.env.PUBLIC_URL + "/icons/checked.png"} alt={"checked"}/>
      </button>
      <ToastContainer />
    </div>
  );
};

export { ButtonOrder };