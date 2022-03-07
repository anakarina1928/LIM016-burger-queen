import {React , useState} from 'react'
import { MenuBar } from './menu.js'
import { Products } from "./products.js"
import { Product } from "./product.js"
//import { useNavigate } from "react-router-dom";
import { AddSubButton } from "../waiterView/addSubButton/addSubButton"
import { CheckTable } from "../waiterView/checkTable/checkTable"

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
                        <Product
                            key={index}
                            item={product}
                        />
                    )}
                </Products>
                <AddSubButton/>
                <CheckTable/>
            </section>
    )

}

export { MenuForAllMeals };