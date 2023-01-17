import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { useContext, useEffect, useState, createContext } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, getDoc, collection } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyAFalXZUMqx_UfHvJhulVbmuZkw3kVod5k",
  authDomain: "group-app-735da.firebaseapp.com",
  projectId: "group-app-735da",
  storageBucket: "group-app-735da.appspot.com",
  messagingSenderId: "387170687398",
  appId: "1:387170687398:web:3bc6398311c58426e69767",
  measurementId: "G-SWBHB17PD8"
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

export function signup(email, password){
  setDoc(doc(db, 'Users', email), {
      playlists: {}
  });
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function createPlaylist() {
  const docRef = doc(db, 'Users', auth.currentUser.email);
  const docSnap = await getDoc(docRef);
  const len = docSnap.data().playlists.length
    updateDoc(docRef, {
        playlists: arrayUnion({
          name: "New Playlist "+len,
          movies: []
        })
    })

}

export async function getPlaylists() {
  const docRef = doc(db, 'Users', auth.currentUser?.email)
  const docSnap = await getDoc(docRef)
  return docSnap.data().playlists
}

export function logout() {
  return signOut(auth)
}

