import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged} from "firebase/auth"
import React, { useContext, useEffect, useState, createContext } from 'react'

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// });

const firebaseConfig = {
  apiKey: "AIzaSyAFalXZUMqx_UfHvJhulVbmuZkw3kVod5k",
  authDomain: "group-app-735da.firebaseapp.com",
  projectId: "group-app-735da",
  storageBucket: "group-app-735da.appspot.com",
  messagingSenderId: "387170687398",
  appId: "1:387170687398:web:3bc6398311c58426e69767",
  measurementId: "G-SWBHB17PD8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

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
