import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import App from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(App);

const UserContext = ({ children }) => {

    const [user, setUser] = useState(null);

    // Signin with github



    // Signin with google    
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // Sign In with gmail and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubscribe()
        }
    }, [])


    const authInfo = { user, createUser, signIn, logOut, providerLogin };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;