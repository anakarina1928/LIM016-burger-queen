import { app } from "./config.js";
import {
  signInWithEmailAndPassword,
  getAuth,
  setPersistence,
  signOut,
  browserSessionPersistence
} from "@firebase/auth";
//import { useNavigate } from"react-router-dom";

export const auth = getAuth(app);

export const loginWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

//setPersistence(auth, browserSessionPersistence);
/*setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("ke serea");
  })
  .catch((error) => {
    console.log(error)
  });
  */

  export const logOut = (auth) => signOut(auth);


 /*onAuthStateChanged(auth, (user) => {
  const Navigate = useNavigate()
    if (!user) {
      Navigate("/");
       console.log('el usuario ya está sign out!');
    }
  });*/

