import { React, useState, useEffect, useContext } from "react";
import { ButtonOrder } from "../../buttonOpenModal-close/buttonOrder"
import { MenuBar } from "./categoryMenu/menu";
import { ProductsList } from "./productList/productsList.js";
import { Product } from "./productList/product.js";
import { AddSubButton } from "./addSubButton/addSubButton"
import { CheckTable } from "./checkTable/checkTable"
import "./indexWaiterView.css";
import { User } from "../../nameUser/nameUser";
import { WaiterNavBar } from '../sectionTabs/waiterNavBar'
import { Modal } from "../../modal/modal"
import { orderToSaveInFirebase } from "../../../firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Holis } from "../../../context/context";

const MenuForAllMeals = () => {
  const [menuValue, setMenuValue] = useState([]);
  const [productSelect, setProductSelect] = useState([]);
  const [productActual, setProductActual] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [sumProduct, setSumProduct] = useState(0);
  const {user} = useContext(Holis)
  // const userSession = userDataLocally();
  // console.log('trae el objeto de user? ', userSession);
    useEffect(() => updateTotalProduct(), [productSelect])
    const colorTab = "/waiterMain"

  const onClick = (event) => {
    let element;
    if (event.target.nodeName === "SPAN") {
      element = event.target.parentNode
    } else {
      element = event.target
    }
    setProductActual(element.dataset.name)
  }


  const setCommentOnProduct = (comment, indexProductList) => {


    const nuwProductLIstWithComments = productSelect.map((element, index) => {

      if (index === indexProductList) {
        element.comentario = comment;
      }
      return element;
    })

    setProductSelect(nuwProductLIstWithComments)
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
        total: product.price,
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
    //setCommentsOnTheOrder("");

  }
  const resetButton = () => {
    setProductSelect([]);
    setTableNumber("");

  }

  const sendOrderToFireBase = () => {
    const newOrderFirebase = {
      init_time: new Date().toLocaleString("es-PE"),
      worker: user.nombre,
      table: tableNumber,
      total: sumProduct,
      state: "PENDIENTE",
      order: productSelect,
    }
    orderToSaveInFirebase(newOrderFirebase);
    reset();

    toast.success("¡Pedido enviado!", {
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

  }

  const confirmOrder = () => {

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
      return;
    }

    if (!tableNumber) {
      toast.warn("¡agregar número de mesa!", {
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
      return;
    }

    openModal();


  };


  return (
    <>
      <section className="container">
        <User />
        <WaiterNavBar colorTab={colorTab} />
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

          setCommentOnProduct={setCommentOnProduct}
        />
        <ButtonOrder
          resetButton={resetButton}
          onClick={confirmOrder}

        />
        {showModal ? <Modal onClick={sendOrderToFireBase} closeModalMenu={closeModal} text={'¿Enviar pedido a cocina?'} /> : ''}

      </section>
      <ToastContainer />
    </>
  );
};

export { MenuForAllMeals };
