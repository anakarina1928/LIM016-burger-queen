import { app } from "./config.js";
import {
  signInWithEmailAndPassword,
  getAuth,
  setPersistence,
  signOut,
  browserSessionPersistence,
} from "@firebase/auth";

export const auth = getAuth(app);

export const loginWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    
  })
  .catch((error) => {
    console.log(error)
  });

  export const logOut = (auth) => signOut(auth);
    
