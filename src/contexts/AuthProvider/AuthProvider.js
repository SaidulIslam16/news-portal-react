import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // google login
    const providerLogin = (prorvider) => {
        return signInWithPopup(auth, prorvider);
    }

    // signup with email and password

    const signUpWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin with email and password

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            setUser(currentUser);
        })
        return () => unSubscribe()
    }, [])

    const appInfo = { user, providerLogin, logOut, signUpWithEmailAndPassword, signIn }
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;