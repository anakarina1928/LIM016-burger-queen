
import { collection, doc, getDoc, addDoc, query, onSnapshot, orderBy, where,updateDoc} from "@firebase/firestore"
import { db } from "./config";
import { userDataLocally } from "../api/api";


//Ref users
export const collectionUser = collection(db, 'usuarios');

//Ref orders
const collectionOrder = collection(db, 'order');

//Guarda las ordenes en Firestore
export const orderToSaveInFirebase = async (newOrder) => {

    try {

        const savingOrder = await addDoc(collectionOrder, newOrder)
        return savingOrder;

    } catch (error) {

        console.log('error al guardar pedido del cliente en firebase');
        throw new Error(error);

    }

};

//Consigue la data del usuario
export const findingUser = async (userId, colllection) => {

    try {

        const documentUserRef = doc(colllection, userId);
        const userDocument = await getDoc(documentUserRef);
        const user = userDocument.data()

        return user;

    } catch (error) {

        throw new Error(error);

    }

};

//Trae las ordenes segun su estado en orden descendente del tiempo
//where('worker', '==' , `"${user2}"`),
//traer data de firebase
// const user =userDataLocally();

//const user2 =user.nombre
//, where('worker', '==' , user2)

export const onDataOrderChange = (state) => {

    return ( (callback) => {
        //console.log("string mesero user 2",user2);
        // console.log('mesero: ', user.nombre);
        const q = query(collectionOrder, where('state', '==', state), orderBy('init_time', "desc"));

        onSnapshot(q, callback);

    })
}
export const onDataOrderChangeByWorker = (state, workerNombre) => {
    return ( (callback) => {        
        const q = query(collectionOrder, where('state', '==', state), where('worker', '==', workerNombre), orderBy('init_time', "desc"));
        onSnapshot(q, callback);
    })
};

export const updateOrder = (documentId, data) => {
    //updateDoc: para actualizar campos de un doc sin reemplazarlo por completo
    const ref = doc(collectionOrder, documentId);
    updateDoc(ref, {
      ...data,
      update_time: new Date().toLocaleString("es-PE"),
    });
  
  };

