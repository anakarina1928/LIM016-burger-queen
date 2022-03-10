import { React, useState } from 'react'
//import { useNavigate } from "react-router-dom";
import { MenuBar } from './categoryMenu/menu'
import { ProductsList } from "./productList/productsList.js"
import { Product } from "./productList/product.js"
import { AddSubButton } from "../waiterView/addSubButton/addSubButton"
import { CheckTable } from "../waiterView/checkTable/checkTable"
import './indexWaiterView.css'
import { auth } from '../../firebase/auth.js'
import { findingUser, collectionUser} from '../../firebase/firestore'



const MenuForAllMeals = () => {
    const userId = auth.currentUser.uid;

    findingUser(userId, collectionUser)
        .then((res) =>
            console.log(res, "data user")
        )

    // let Navigate = useNavigate();
    const [menuValue, setMenuValue] = useState([]);//vamos a compartir nuestro estado en varios componenetes
    const [productSelect, setProductSelect] = useState([]);

    const addProduct = (product) => {

        let productParaSaberSiExiste = false;

        const nuevoProduct = productSelect.map(element => {

            if (element.name === product.name) {
                productParaSaberSiExiste = true; /* verifico si el producto existe por eso cambio el valor
                - mi valor booleano pasa por aqui primero */
                element.cantidad = element.cantidad + 1;
                element.total = element.cantidad * element.price;// agarro el total que ya tenia y le agrego el nuevo total

            }
            
            return element;

        })
        //como el valor es falso se convierte en verdadero y si el valor es verdadero se convierte en falso.
        if (!productParaSaberSiExiste) {

            nuevoProduct.push(

                {
                    name: product.name,
                    price: product.price,
                    cantidad: 1,
                    total: product.price
                }

            )
        }
        setProductSelect(nuevoProduct);
    }

    return (
        <section className="container">
            <MenuBar
                setMenuValue={setMenuValue}
            />
            <ProductsList>
                {menuValue.map((product, index) =>
                    <div className='productDiv'>
                        <Product
                            key={index}
                            item={product}
                        />
                        <AddSubButton
                            item={product}
                            addProduct={addProduct}

                        />

                    </div>
                )}
            </ProductsList>
            <CheckTable
                productSelect={productSelect}
            />
        </section>
    )
}

export { MenuForAllMeals };