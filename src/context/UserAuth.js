import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { getUserData } from "../repository/FirebaseGetUserData";

const AuthContext = createContext();

const headerBgUrl = 'https://images.unsplash.com/photo-1676968986443-7f47aad7d993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'

export function AuthContextProvider({ children }) {
    const [currentUserData, setCurrentUserData] = useState([])

    const auth = getAuth()

    const [user, setUser] = useState(null)

    function SignUp(email, password, userName) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                console.log(res.user)
                const ref = doc(db, 'users', res.user.uid)

                const userData = {
                    email: email,
                    joindate: new Date().getTime(),
                    coverimgurl: headerBgUrl,
                    username: userName,
                    uid: res.user.uid
                }

                await setDoc(ref, userData)
            })
    }

    function SignIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => onAuthStateChanged(auth, (currentuser) => setUser(currentuser)))


    function LogOut() {
        return signOut(auth)
    }

    useEffect(() => { getUserData(db, user, setCurrentUserData) }, [user])

    return (
        <AuthContext.Provider value={{ SignUp, LogOut, SignIn, user, currentUserData }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext);
}