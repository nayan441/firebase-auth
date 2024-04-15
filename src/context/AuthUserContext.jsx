import React, { useContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from '../firebase';
import { createContext } from "react";

export const UserContext = createContext({});

const AuthUserContext = ({ children }) => {
    const [user, setUser] = useState({});

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          console.log("Auth--", user?.auth?.currentUser);
          setUser(user);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);

    return (
        <UserContext.Provider value={{ user, setUser, logIn, logOut, signUp }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(UserContext);
  }

export default AuthUserContext