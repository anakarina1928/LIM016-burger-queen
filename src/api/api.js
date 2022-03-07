import menuData from '../menu.json';
import menuCategories from '../menu_categories.json';

/*el api es el que me sirve para la manupulacion de los datos (interca de datos)*/

const filterMenuByCategory = (category) => {
    return menuData.menu.items.filter(item => item.category === category);
};

const getAllCategories = () => {
    return menuCategories;
}

const getAllProductos = () => {
    return menuData;
}

export { filterMenuByCategory, getAllCategories };