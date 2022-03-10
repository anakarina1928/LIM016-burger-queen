
import {collection, doc, getDoc} from "@firebase/firestore"
import { db } from "./config";
export const collectionUser = collection(db, 'usuarios');

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