import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    
//google
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth,provider)
    }
    

    //use pass email
    const createUser = (email, password) => {
       setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

     //update photo name
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    //login
    const signIn = (email, password) => {
         setLoading(true);
        return signInWithEmailAndPassword(auth,email, password)

    }
   

    //logout
    const logOut = () => {
       // setLoading(true);
        localStorage.removeItem('token')
        return signOut(auth);
    }


    //getting user
    useEffect(() => {
     const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
         console.log('done', currentUser);
        
             setUser(currentUser);
            console.log('done', currentUser);
         
         setLoading(false)
     });
        return () => {
            unsubscribe();
        }

    }, [])
    
  
     const authInfo = {
         user,
         providerLogin,
         logOut,
         createUser,
         signIn,
         loading,
         setLoading,
         updateUserProfile
        
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;