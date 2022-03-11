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
    const [selectedButton, setSelectedButton] = useState(false)
    
    const handleClick = () => {
        // setSelectedButton(item !== selectedButton ? item : null)
        setSelectedButton((prevCheck) => !prevCheck)
    }

    console.log(selectedButton)

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
                        onClick={handleClick}
                    >
                    </Product>
                    {selectedButton === true && <AddSubButton />}
                </div>
            )}
        </Products>
        <CheckTable/>
    </section>
    )
}

export { MenuForAllMeals };