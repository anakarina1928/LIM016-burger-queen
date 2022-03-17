import { React, useState} from "react";
//import { useNavigate } from "react-router-dom";
import { MenuBar } from "./categoryMenu/menu";
import { ProductsList } from "./productList/productsList.js";
import { Product } from "./productList/product.js";
import { AddSubButton } from "./addSubButton/addSubButton";
import { CheckTable } from "./checkTable/checkTable";
import "./indexWaiterView.css";
import { User } from "../../nameUser/nameUser";
import { WaiterNavBar } from '../sectionTabs/waiterNavBar'

const MenuForAllMeals = () => {
  
  // let Navigate = useNavigate();
  const [menuValue, setMenuValue] = useState([]); //vamos a compartir nuestro estado en varios componenetes
  const [productSelect, setProductSelect] = useState([]);

  const[productActual, setProductActual] = useState("")

  const onClick=(event)=>{
    let element;
    if (event.target.nodeName ==="SPAN"){
        element = event.target.parentNode
      } else{
        element = event.target
    }
    setProductActual(element.dataset.name)
    //console.log(element,"que me traes")
    console.log(element.dataset.name,"nombre")
  }

  const addProduct = (product) => {
    //console.log("produc", product)
    let productParaSaberSiExiste = false;

    const nuevoProduct = productSelect.map((element) => {
      if (element.name === product.name) {
        productParaSaberSiExiste = true; /* verifico si el producto existe por eso cambio el valor
            - mi valor booleano pasa por aqui primero */
        element.cantidad = element.cantidad + 1;
        element.total = element.cantidad * element.price; // agarro el total que ya tenia y le agrego el nuevo total
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
        /* verifico si el producto existe por eso cambio el valor
            - mi valor booleano pasa por aqui primero */
        element.cantidad = element.cantidad - 1;
        element.total = element.cantidad * element.price; // agarro el total que ya tenia y le agrego el nuevo total
      }
      if(element.cantidad > 0) acum.push(element);
      return acum;
    },[]);
    
    setProductSelect(nuevoProduct);
  };

  return (
    <section className="container">
      <User/>
      <WaiterNavBar/>
      <MenuBar setMenuValue={setMenuValue}/>
      <ProductsList>
        {menuValue.map((product, index) => {
          const cant= productSelect.find((el)=>el.name === product.name)?.cantidad;
          return(
          <div className="productDiv">
            <Product key={index} item={product} onClick={onClick}/>
            {productActual=== product.name && <AddSubButton item={product} addProduct={addProduct} subProduct={subProduct} cant={cant}/>}
          </div>)
        })}
      </ProductsList>
        <CheckTable productSelect={productSelect} />
    </section>
  );
};

export { MenuForAllMeals };
