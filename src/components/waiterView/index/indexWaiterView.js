<<<<<<< HEAD:src/components/waiterView/indexWaiterView.js
import { React, useState } from "react";
=======
import { React, useState} from "react";
>>>>>>> 51b3d9b813e4cf39bd9ff197fb4000c9482a1871:src/components/waiterView/index/indexWaiterView.js
import { ButtonOrder } from './categoryMenu/buttonOrder';
import { MenuBar } from "./categoryMenu/menu";
import { ProductsList } from "./productList/productsList.js";
import { Product } from "./productList/product.js";
import { AddSubButton } from "./addSubButton/addSubButton";
import { CheckTable } from "./checkTable/checkTable";
import "./indexWaiterView.css";
<<<<<<< HEAD:src/components/waiterView/indexWaiterView.js
import { User } from "../nameUser/nameUser";
import { WaiterNavBar } from './sectionTabs/waiterNavBar'
import { Modal } from "./modal/modal"
import { orderToSaveInFarebase } from "../../firebase/firestore";

const MenuForAllMeals = () => {
=======
import { User } from "../../nameUser/nameUser";
import { WaiterNavBar } from '../sectionTabs/waiterNavBar'
import {orderToSaveInFirebase} from '../../../firebase/firestore'

export function MenuForAllMeals () {
  
  // let Navigate = useNavigate();
>>>>>>> 51b3d9b813e4cf39bd9ff197fb4000c9482a1871:src/components/waiterView/index/indexWaiterView.js
  const [menuValue, setMenuValue] = useState([]); //vamos a compartir nuestro estado en varios componenetes
  const [productSelect, setProductSelect] = useState([]);
  const [productActual, setProductActual] = useState("")
  const [showModal, setShowModal] = useState(false);

  const onClick = (event) => {
    let element;
    if (event.target.nodeName === "SPAN") {
      element = event.target.parentNode
    } else {
      element = event.target
    }
    setProductActual(element.dataset.name)
    //console.log(element,"que me traes")
    console.log(element.dataset.name, "nombre")
  }

  const addProduct = (product) => {
    //console.log("produc", product)
    let productParaSaberSiExiste = false;

    const nuevoProduct = productSelect.map((element) => {
      if (element.name === product.name) {
        productParaSaberSiExiste = true; /* verifico si el producto existe por eso cambio el valor
            - mi valor booleano pasa por aqui primero */
        element.cantidad = element.cantidad + 1;
        element.total = element.total + element.price; // agarro el total que ya tenia y le agrego el nuevo total
      }

      return element;
    });
    //como el valor es falso se convierte en verdadero y si el valor es verdadero se convierte en falso.
    if (!productParaSaberSiExiste) {
      nuevoProduct.push({
        name: product.name,
        price: product.price,
        cantidad: 1,
        total: product.price,
      });
    }
    setProductSelect(nuevoProduct);
  };
  const subProduct = (product) => {
    const nuevoProduct = productSelect.reduce((acum, element) => {
      if (element.name === product.name) {

        element.cantidad = element.cantidad - 1;
        element.total = element.cantidad * element.price; // agarro el total que ya tenia y le agrego el nuevo total
      }
      if (element.cantidad > 0) acum.push(element);
      return acum;
    }, []);

    setProductSelect(nuevoProduct);
  };
<<<<<<< HEAD:src/components/waiterView/indexWaiterView.js
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  const reset = () => {
    closeModal();
    setProductSelect([]);
  }
  const sendOrderToFireBase = () => {
    const newOrderFirebase = {
      init_time: new Date().toLocaleString("es-PE"),
      state: "PENDIENTE",
      order: productSelect,
=======
  const sendTheOrder = () =>{
       
    if (productSelect.length === 0) {
        alert("tu pedido esta vacio");
        
    }else{
        const newOrderFirebase = {
            order: productSelect,
            init_time: new Date().toLocaleString("es-PE"),
            state: "pedido pendiente",
            /*todavia faltan campos*/ 
            }
        orderToSaveInFirebase(newOrderFirebase)
    }
       
>>>>>>> 51b3d9b813e4cf39bd9ff197fb4000c9482a1871:src/components/waiterView/index/indexWaiterView.js
    }
    orderToSaveInFarebase(newOrderFirebase);
    reset();
  }




  return (
    <section className="container">
<<<<<<< HEAD:src/components/waiterView/indexWaiterView.js
      <User />
      <WaiterNavBar />
      <MenuBar setMenuValue={setMenuValue} />
=======
      <User/>
      <WaiterNavBar onClick={onClick}/>
      <MenuBar setMenuValue={setMenuValue}/>
>>>>>>> 51b3d9b813e4cf39bd9ff197fb4000c9482a1871:src/components/waiterView/index/indexWaiterView.js
      <ProductsList>
        {menuValue.map((product, index) => {
          const cant = productSelect.find((el) => el.name === product.name)?.cantidad;
          return (
            <div className="productDiv">
              <Product key={index} item={product} onClick={onClick} />
              {productActual === product.name && <AddSubButton item={product} addProduct={addProduct} subProduct={subProduct} cant={cant} />}
            </div>)
        })}
      </ProductsList>
      <CheckTable productSelect={productSelect} />
      <ButtonOrder
        productSelect={productSelect}
        openModal={openModal}

      />
      {showModal ? <Modal sendOrderToFireBase={sendOrderToFireBase} closeModal={closeModal} /> : ''}

    </section>
  );
};
