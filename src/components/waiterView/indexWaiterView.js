import {React , useState} from 'react'
//import { useNavigate } from "react-router-dom";
import { MenuBar } from './categoryMenu/menu'
import { ProductsList } from "./productList/productsList"
import { Product } from "./productList/product"
import { AddSubButton } from "../waiterView/addSubButton/addSubButton"
import { CheckTable } from "../waiterView/checkTable/checkTable"
import './indexWaiterView.css'
import { auth } from '../../firebase/auth.js'
import { findingUser, collectionUser} from '../../firebase/firestore'


const MenuForAllMeals = () => {
    const userId = auth.currentUser.uid;
    findingUser(userId,collectionUser)
    .then((res)=>
    console.log(res,"data user")
    )
    

   // let Navigate = useNavigate();
    const [menuValue, setMenuValue] = useState([]);//vamos a compartir nuestro estado en varios componenetes


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
                    <AddSubButton/>
                </div>
            )}
        </ProductsList>
        <CheckTable/>
    </section>
    )
}

export { MenuForAllMeals };