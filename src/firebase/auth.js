import { app , db} from "./config.js";
import {signInWithEmailAndPassword, getAuth} from "@firebase/auth"
import {collection, doc, getDoc, query} from "@firebase/firestore"

export const auth = getAuth(app);
export const collectionUser = collection(db, 'usuarios');
//Ingreso de usuario con email y contraseña
export const loginWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);


//Poner en firestore
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
