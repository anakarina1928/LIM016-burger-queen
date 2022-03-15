
import {collection, doc, getDoc , addDoc} from "@firebase/firestore"
import { db } from "./config";
export const collectionUser = collection(db, 'usuarios');

const collectionOrder = collection(db, 'order');

export const orderToSaveInFarebase = (newOrder) =>{

    addDoc(collectionOrder, newOrder)

}

export const findingUser = async (userId, colllection) => {
    try {
        const documentUserRef = doc(colllection, userId);
        const userDocument = await getDoc(documentUserRef);
        const user = userDocument.data()
        return user;
    } catch (error) {
        console.log('error buscado al user id:' , userId, error);
        throw new Error(error);
    }
};