import menuData from '../menu.json';
import menuCategories from '../menu_categories.json';
import { useState, useEffect } from 'react';

/* el api es el que me sirve para la manupulacion de los datos (interca de datos) */

// Filtra para obtener los items segun categoria
const filterMenuByCategory = (category) => {
  return menuData.menu.items.filter(item => item.category === category);
};

// Retorna todas las categorias con su info respectiva
const getAllCategories = () => {
  return menuCategories;
};

//
const useDocsInRealTime = (onDataChangeFunc) => {
  const [documents, setDocs] = useState([]);

  useEffect(() => {
    const setDocsOnQuerySnapshot = (querySnapshot) => {
      const newDocs = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          data: doc.data()
        };
      });
      setDocs(newDocs);
    };

    onDataChangeFunc(setDocsOnQuerySnapshot);
  }, []);// colocamos un arreglo vacio para cuando queramos que useEffect se ejecute una sola vez, retornamos el estado interno
  return documents;
};

function orderNumber () {
  const now = Date.now().toString();
  const orderNum = now.substring(6, 12);

  return orderNum;
}

export { filterMenuByCategory, getAllCategories, useDocsInRealTime, orderNumber };
