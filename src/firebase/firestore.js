
import { collection, doc, getDoc, addDoc, query, onSnapshot, orderBy} from "@firebase/firestore"
import { db } from "./config";
export const collectionUser = collection(db, 'usuarios');

const collectionOrder = collection(db, 'order');

export const orderToSaveInFirebase = async (newOrder) => {
    try {
        const savingOrder = await addDoc(collectionOrder, newOrder)
        return savingOrder;

    } catch (error) {
        console.log('error al guardar pedido del cliente en firebase');
        throw new Error(error);
    }

};

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
 
//traer data de firebase
export const onDataDocument = async (callBack) =>{
    const q = query(collectionOrder, orderBy('init_time',"desc"));
     await onSnapshot(q, (callBack))
};

