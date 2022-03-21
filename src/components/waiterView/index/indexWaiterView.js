import { React, useState, useEffect } from "react";
import { ButtonOrder } from './categoryMenu/buttonOrder';
import { MenuBar } from "./categoryMenu/menu";
import { ProductsList } from "./productList/productsList.js";
import { Product } from "./productList/product.js";
import { AddSubButton } from "./addSubButton/addSubButton"
import { CheckTable } from "./checkTable/checkTable"
import "./indexWaiterView.css";
import { User } from "../../nameUser/nameUser";
import { WaiterNavBar } from '../sectionTabs/waiterNavBar'
import { Modal } from "../modal/modal"
import { orderToSaveInFirebase } from "../../../firebase/firestore";

const MenuForAllMeals = () => {
  const [menuValue, setMenuValue] = useState([]);
  const [productSelect, setProductSelect] = useState([]);
  const [productActual, setProductActual] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [sumProduct, setSumProduct] = useState(0);
  const [commentsOnTheOrder, setCommentsOnTheOrder] = useState("");
  useEffect(() => updateTotalProduct(), [productSelect])

  const onClick = (event) => {
    let element;
    if (event.target.nodeName === "SPAN") {
      element = event.target.parentNode
    } else {
      element = event.target
    }
    setProductActual(element.dataset.name)
  }


  const updateTotalProduct = () => {
    console.log("products: ", productSelect);
    const total = productSelect.reduce((acumulador, element) => acumulador + element.total, 0);
    console.log("total calculado: ", total);
    setSumProduct(total)

  }

  const addProduct = (product) => {

    //usamos una variable Flag para saber si un producto existe en la lista de productos agregados, por defecto asumimos que no existe
    let productParaSaberSiExiste = false;


    const nuevoProduct = productSelect.map((element) => {
      if (element.name === product.name) {
        productParaSaberSiExiste = true; /* verifico si el producto existe por eso cambio el valor
            - mi valor booleano pasa por aqui primero */
        element.cantidad = element.cantidad + 1;
        element.total = element.cantidad * element.price;
        // agarro el total que ya tenia y le agrego el nuevo total

      }

      return element;
    });
    //como el valor es falso se convierte en verdadero y si el valor es verdadero se convierte en falso.
    //Si el producto no existe, agrego el producto a la lista
    if (!productParaSaberSiExiste) {
      nuevoProduct.push({
        name: product.name,
        price: product.price,
        cantidad: 1,
        total: "S/ " + product.price,
      });
    }

    // Actualizamos el estado de la lista de productos y cuando se actualice se ejecutara la funcion callback para actualizar el total
    setProductSelect(nuevoProduct);

  };
  const subProduct = (product) => {
    const nuevoProduct = productSelect.reduce((acum, element) => {
      if (element.name === product.name) {

        element.cantidad = element.cantidad - 1;
        element.total = element.cantidad * element.price;
      }
      if (element.cantidad > 0) acum.push(element);
      return acum;
    }, []);

    setProductSelect(nuevoProduct);
  };
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  const reset = () => {
    closeModal();
    setProductSelect([]);
    setTableNumber("");
    setCommentsOnTheOrder("");

  }
  const resetButton = () => setProductSelect([]);
  
  const sendOrderToFireBase = () => {
    const newOrderFirebase = {
      init_time: new Date().toLocaleString("es-PE"),
      //workert:userNameWorker,
      table: tableNumber,
      total: "S/ " + sumProduct,
      comments: commentsOnTheOrder,
      state: "PENDIENTE",
      order: productSelect,
    }

    orderToSaveInFirebase(newOrderFirebase);
    reset();
  }


  return (
    <section className="container">
      <User />
      <WaiterNavBar />
      <MenuBar setMenuValue={setMenuValue} />
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
      <CheckTable
        productSelect={productSelect}
        sumProduct={sumProduct}
        setTableNumber={setTableNumber}
        tableNumber={tableNumber}
        commentsOnTheOrder={commentsOnTheOrder}
        setCommentsOnTheOrder={setCommentsOnTheOrder}

      />
      <ButtonOrder
        productSelect={productSelect}
        openModal={openModal}
        resetButton={resetButton}
        tableNumber={tableNumber}
      />
      {showModal ? <Modal sendOrderToFireBase={sendOrderToFireBase} closeModal={closeModal} /> : ''}

    </section>
  );
};

export { MenuForAllMeals };
