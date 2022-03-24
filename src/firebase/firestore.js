
import { collection, doc, getDoc, addDoc, query, onSnapshot, orderBy, where } from "@firebase/firestore"
import { db } from "./config";
//import { userDataLocally } from "../api/api";


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
export const onDataOrderChange = (state) => {

    return ( (callback) => {
        
        const q = query(collectionOrder, where('state', '==', state), orderBy('init_time', "desc"));

        onSnapshot(q, callback);

    })

};