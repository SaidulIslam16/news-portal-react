import React, { createContext } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const user = { name: 'saidul islam' }

    const appInfo = { user }
    return (
        <AuthContext.Provider value={appInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;