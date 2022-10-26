import React, { createContext, useState } from 'react';
import { getAuth } from 'firebase/auth';
import App from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(App);

const UserContext = ({ children }) => {

    const [user, setUser] = useState({ displayName: 'AAkash' })

    const authInfo = { user: user };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;