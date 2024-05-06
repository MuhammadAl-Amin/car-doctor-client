import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config'


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, createUser =>{
            setUser(createUser);
            console.log('current user', createUser)
            setLoading(false)
        })
        return () =>{
            return unSubscribe()
        }
    }, [])
    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }
  return (
    <AuthContext.Provider value = {userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider