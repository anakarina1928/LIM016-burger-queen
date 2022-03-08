import {React , useState} from 'react'
//import { useNavigate } from "react-router-dom";
import { MenuBar } from './categoryMenu/menu'
import { Products } from "./productList/productsList.js"
import { Product } from "./productList/product.js"
import { AddSubButton } from "../waiterView/addSubButton/addSubButton"
import { CheckTable } from "../waiterView/checkTable/checkTable"
import './indexWaiterView.css'

const MenuForAllMeals = () => {
   // let Navigate = useNavigate();
    const [menuValue, setMenuValue] = useState([]);//vamos a compartir nuestro estado en varios componenetes
    return (
        <section className="container">
        <MenuBar
            setMenuValue={setMenuValue}
        />
        <Products>
            {menuValue.map((product, index) =>
                <div className='productDiv'>
                    <Product
                        key={index}
                        item={product}
                    />
                    <AddSubButton/>
                </div>
            )}
        </Products>
        <CheckTable/>
    </section>
    )
}

export { MenuForAllMeals };