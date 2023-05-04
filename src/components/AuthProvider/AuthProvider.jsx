import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";


const auth =getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const user = "Rabbi";


    const Register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    const AuthInfo = {
        user,
        Register,
        signIn
    
    
    };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;