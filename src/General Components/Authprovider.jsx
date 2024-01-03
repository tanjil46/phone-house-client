import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from './firebase.config';
export const AuthContext=createContext(null)
const Authprovider = ({children}) => {
    const googleProvider=new GoogleAuthProvider()
    const [loading,setLoading]=useState(true)
    const[user,setUser]=useState(null)
   



    const createUser=(email,Password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,Password)
  
    };
    
    const userSingIn=(email,password)=>{
      setLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
    };

    const googleLogIn=()=>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
    }
    
    const profileUser = (name, photo) => {
      return updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
      });
    }

 const userLogOut=()=>{
  setLoading(true)
    return signOut(auth)
 }










    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
       
           setUser(currentUser)
          
         
         
         
         



         setLoading(false)


           })
     
          return ()=>{
             unSubscribe()
          }
     
     },[]);







const authValues={user,createUser,userSingIn,googleLogIn,userLogOut,loading,profileUser}





    return (
    <AuthContext.Provider value={authValues}>
            {children}
    </AuthContext.Provider>
    );
};

Authprovider.propTypes={
    children:PropTypes.node,
    
    
    }


export default Authprovider;