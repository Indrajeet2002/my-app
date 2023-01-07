import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged} from "firebase/auth"
import { useContext, useEffect, useState, createContext } from 'react'
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();

const UserContext = createContext();

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => { setCurrentUser(user); })
        return unsubscribe;
    }, []) 

  return (
    <UserContext.Provider value={currentUser}>
        {children}
    </UserContext.Provider>
  )
}


