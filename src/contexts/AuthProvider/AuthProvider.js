import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google login
    const providerLogin = (prorvider) => {
        setLoading(true);
        return signInWithPopup(auth, prorvider);
    }

    // signup with email and password

    const signUpWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin with email and password

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // logout

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe()
    }, [])

    const appInfo = {
        user,
        loading,
        providerLogin,
        logOut,
        signUpWithEmailAndPassword,
        signIn,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;