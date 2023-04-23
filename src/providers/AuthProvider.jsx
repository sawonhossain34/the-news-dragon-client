import React from 'react';
import {  applyActionCode, getAuth } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null);

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const user={displayName : "muri khan"}
    const authInfo = {user};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;