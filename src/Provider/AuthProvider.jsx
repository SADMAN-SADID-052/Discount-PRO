import { useEffect, useState } from "react";
import { createContext } from "react";
import app from "../Components/FireBase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    // console.log(loading, user);
  const createNewUser = (email,password) =>{

    setLoading(true);
  return createUserWithEmailAndPassword(auth,email,password);

  }

//   Login User
const userLogin=(email,password)=>{

    setLoading(true);

    return signInWithEmailAndPassword(auth,email,password)
}


const logOut = () =>{

    setLoading(true);

    return signOut(auth);


}

const updateUserProfile = async (displayName, photoURL) => {
    if (!auth.currentUser) {
        throw new Error('No user is currently logged in.');
    }

    try {
        await updateProfile(auth.currentUser, { displayName, photoURL });
        // Update the local user state to reflect the changes
        setUser((prevUser) => ({
            ...prevUser,
            displayName,
            photoURL,
        }));
        console.log('Profile updated successfully!');
    } catch (error) {
        console.error('Error updating profile:', error);
        throw error;
    }
};


    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        updateUserProfile,
        loading
    };

    useEffect(()=>{


const unsubscribe = onAuthStateChanged(auth,currentUser =>{
setUser(currentUser);
setLoading(false);
})

return () =>{

    unsubscribe();
}

    },[])
    return <AuthContext.Provider value={authInfo}>

        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;