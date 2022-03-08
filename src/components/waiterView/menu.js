import React from "react";
import './menu.css'
import { Button } from '../waiterView/button';
import { filterMenuByCategory, getAllCategories } from "../../api/api";

const MenuBar = ({ setMenuValue }) => {

    const onSearchValueChange = (event) => {
        //Prevenimos el comportamiento por defecto del button
        event.preventDefault();
        const newMenu = filterMenuByCategory(event.target.value);

        //Notificamos al componente padre una actualizacion de estado
        setMenuValue(newMenu);
    }
    return (
        <>
            <section className="menu-container-father">
                {
                    getAllCategories().map((category, index) => {
                        return <Button
                            key={index}
                            className={"btnMenuOption"}
                            value={category.categoryName}
                            onClick={onSearchValueChange} 
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
