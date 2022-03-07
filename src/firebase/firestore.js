
import {collection, doc, getDoc} from "@firebase/firestore"
import { db } from "./config";
export const collectionUser = collection(db, 'usuarios');

export const findingUser = async (userId, colllection) => {
    console.log("buscando al usuario: ", userId);
    try {
        const documentUserRef = await doc(colllection, userId);
        const userDocument = await getDoc(documentUserRef);
        console.log("documento obtenido: ", userDocument);
        return userDocument;
    } catch (error) {
        console.log('error buscado al user id:' , userId, error);
        throw new Error(error);
    }
};