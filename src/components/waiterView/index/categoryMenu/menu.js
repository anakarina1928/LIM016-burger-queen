import React from 'react';
import './menu.css';
import { Button } from './button';
import { filterMenuByCategory, getAllCategories } from '../../../../api/api';

const MenuBar = ({ setMenuValue }) => {
  const onSearchValueChange = (event) => {
    const element = event.currentTarget;
    console.log(element);

    event.preventDefault();
    const newMenu = filterMenuByCategory(element.value);

    setMenuValue(newMenu);
  };

  return (
        <>
            <section className="menu-container-father">
                {
                    getAllCategories().map((category, index) => {
                      return <Button
                            clickHandler={onSearchValueChange}
                            key={index}
                            className={'btnMenuOption'}
                            value={category.categoryName}
                            text={category.categoryText}
                            src={category.photo}
                            alt={category.categoryName}
                        />;
                    })
                }

            </section>
        </>
  );
};

export { MenuBar };
