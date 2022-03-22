import menuData from '../menu.json';
import menuCategories from '../menu_categories.json';
import { useState, useEffect } from "react";


/*el api es el que me sirve para la manupulacion de los datos (interca de datos)*/

const filterMenuByCategory = (category) => {
    return menuData.menu.items.filter(item => item.category === category);
};

const getAllCategories = () => {
    return menuCategories;
}


const useDocsInRealTime = (onDataChangeFunc) => {
    const [documents, setDocs] = useState([]);

    useEffect(() => {
       
        const setDocsOnQuerySnapshot = (querySnapshot) => {
             
            const newDocs = querySnapshot.docs.map(doc => {
               return {
                   id: doc.id,
                   data: doc.data()
               } 
            });
            setDocs(newDocs);
        }

        
        onDataChangeFunc(setDocsOnQuerySnapshot);

    }, [])//colocamos un arreglo vacio para cuando queramos que useEffect se ejecute una sola vez
    /*retornamos el estado interno */
    return documents;

}

export const userDataLocally = () => {
    const userSession = sessionStorage.getItem('user');
    const userSessionObjet = JSON.parse(userSession);
    return userSessionObjet;
  }


export { filterMenuByCategory, getAllCategories, useDocsInRealTime };



// const orderData = async () => {
//     return onDataDocument((querySnapshot) => {
//       const documents = [];
//       querySnapshot.forEach((doc) => {
//         documents.push({ id: doc.id, ...doc.data() });
//       });
//       console.log(documents,"a ver")
//       return documents;
//     });
//   };

//   orderData().then(orders => {
//       console.log(orders, "ordenes de firebase");
//   })
