import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";


const auth =getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    


    const Register = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const passwordReset = (email) =>{
        return sendPasswordResetEmail(auth, email);
    }
    
    const googleSingIn = (googleProvider) =>{
        return signInWithPopup (auth, googleProvider);
    }

    const githubSingIn = (githubProvider) =>{
        return signInWithPopup (auth, githubProvider);
    }

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, currentUser =>{
            console.log('auth state changed', currentUser);
            setUser(currentUser)
            setLoading(false);
        });
        return() =>{
            unsubscribe();
        }
    },[])


    const AuthInfo = {
        user,
        Register,
        signIn,
        logOut,
        passwordReset,
        googleSingIn,
        githubSingIn,
        loading
    
    
    };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;