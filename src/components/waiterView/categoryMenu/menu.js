import React from "react";
import './menu.css'
import { Button } from './button';
import { filterMenuByCategory, getAllCategories } from "../../../api/api";

const MenuBar = ({ setMenuValue }) => {

    const onSearchValueChange = (event) => {
        let element;
        if (event.target.nodeName ==="IMG"){
            element = event.target.parentNode
         } else{
            element = event.target
        }
        //Prevenimos el comportamiento por defecto del button
        event.preventDefault();
        const newMenu = filterMenuByCategory(element.value);

        //Notificamos al componente padre una actualizacion de estado
        setMenuValue(newMenu);
    }
    return (
        <>
            <section className="menu-container-father">
                {
                    getAllCategories().map((category, index) => {
                        // console.log(index)
                        return <Button
                            onClick={onSearchValueChange} 
                            key={index}
                            className={"btnMenuOption"}
                            value={category.categoryName}                            
                            text={category.categoryText}
                            src={category.photo}
                            alt={category.categoryName}
                        />
                        
                    })
                }

                
                                
            </section>
        </>
    );
};

export { MenuBar };
