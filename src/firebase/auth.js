import { app } from './config.js';
import {
  signInWithEmailAndPassword,
  getAuth,
  signOut,
  onAuthStateChanged
} from '@firebase/auth';
import { findingUser, collectionUser } from './firestore.js';
import { useEffect, useState } from 'react';

export const auth = getAuth(app);

export const loginWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logOut = (auth) => signOut(auth);

export const useAuth = () => {
  const [user, setUser] = useState({
    authenticated: false,
    isLoading: true
  });
  useEffect(() => {
    onAuthStateChanged(auth, async (userFirebase) => {
      console.log('wuuuu2', userFirebase);
      // const Navigate = useNavigate()
      if (!userFirebase) {
        setUser({
          ...user,
          isLoading: false,
          authenticated: false
        });
        console.log('no haya usuario');
        // callback(undefined)
        // Navigate("/");
      } else {
        console.log('si hay usuario');
        const userData = await verifyUserAuthenticated();
        setUser({
          ...userData,
          isLoading: false,
          authenticated: true
        });
        // callback(userData)
      }
    });
  }, []);
  return user;
};

export const verifyUserAuthenticated = async () => {
  console.log('esto es auth', auth);
  if (auth.currentUser) {
    const dataUser = await findingUser(auth.currentUser.uid, collectionUser);

    return dataUser;
  } else {
    return undefined;
  }
};
